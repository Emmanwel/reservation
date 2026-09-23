import Room from "../models/room";
import User from "../models/user";
import Booking from "../models/booking";
import getRawBody from "raw-body";

import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import absoluteUrl from "next-absolute-url";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Generate stripe checkout session   =>   /api/checkout_session/:roomId
const stripCheckoutSession = catchAsyncErrors(async (req, res, next) => {
  // Get room details
  const room = await Room.findById(req.query.roomId);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  const { checkInDate, checkOutDate, daysOfStay } = req.query;

  const amount = Number(req.query.amount);

  if (!amount || amount <= 0) {
    return next(new ErrorHandler("Invalid booking amount", 400));
  }

  // Get origin
  const { origin } = absoluteUrl(req);

  // Create stripe checkout session
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `${origin}/bookings/me`,
    cancel_url: `${origin}/room/${room._id}`,
    customer_email: req.user.email,
    client_reference_id: req.query.roomId,
    metadata: { checkInDate, checkOutDate, daysOfStay },
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: Math.round(amount * 100),
          product_data: {
            name: room.name,
            images: room.images && room.images[0] ? [room.images[0].url] : [],
          },
        },
        quantity: 1,
      },
    ],
  });

  res.status(200).json(session);
});

// Create new booking after payment   =>   /api/webhook
const webhookCheckout = catchAsyncErrors(async (req, res) => {
  const rawBody = await getRawBody(req);
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Stripe webhook signature verification failed =>", error.message);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const room = session.client_reference_id;
    const user = await User.findOne({ email: session.customer_email });

    if (!user) {
      console.error(
        "Stripe webhook: no matching user for",
        session.customer_email
      );
    } else {
      const amountPaid = session.amount_total / 100;

      const paymentInfo = {
        id: session.payment_intent,
        status: session.payment_status,
      };

      const { checkInDate, checkOutDate, daysOfStay } = session.metadata;

      await Booking.create({
        room,
        user: user._id,
        checkInDate,
        checkOutDate,
        daysOfStay,
        amountPaid,
        paymentInfo,
        paidAt: Date.now(),
      });
    }
  }

  // Always acknowledge receipt so Stripe doesn't keep retrying
  res.status(200).json({ received: true });
});

export { stripCheckoutSession, webhookCheckout };
