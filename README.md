This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
4.2.1
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



timezone is in the bookngcontroller. 
const timeDifference.... it was divided by 60 since the timezone is 5 hours between yhe UTC time


"next-auth": "^3.25.0",
install stripe


brand logo in stripe checkout session
go to settings - in the business settings  choose branding - put theire the logo



stripe listen --events checkout.session.completed --forward-to localhost:3000/api/webhook




import Booking from "../models/booking";
import Room from "../models/room";

import cloudinary from "cloudinary";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";

// Create all rooms   =>   /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 8;

  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeatures.query.clone;
  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query;

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

// Create new room   =>   /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});
// Get room details   =>   /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});
// Update room details   =>   /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    room,
  });
});

// Delete room    =>   /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is deleted",
  });
});

export { deleteRoom, allRooms, newRoom, getSingleRoom, updateRoom };
