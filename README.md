# Resorts Reservation

A full-stack resort/hotel booking app built with Next.js. Guests can search
rooms, book and pay with Stripe, leave reviews, and manage their bookings;
admins can manage rooms, bookings, users and reviews from a dedicated
dashboard.

## Tech stack

- **Framework:** Next.js 12 (React 17), Redux + `next-redux-wrapper` for
  state, `next-auth` (credentials provider) for authentication
- **Database:** MongoDB via Mongoose
- **Payments:** Stripe Checkout + webhooks
- **Media:** Cloudinary for room photos and avatars
- **Email:** Nodemailer (password reset emails)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example environment file and fill in real values:

   ```bash
   cp .env.example .env
   ```

   See [Environment variables](#environment-variables) below for what each
   one is for. **You need a real `DB_URI`** -- create a free cluster at
   [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and paste
   its connection string in. The DB used during earlier development is no
   longer reachable.

3. (Optional) Seed the database with sample rooms:

   ```bash
   npm run seeder
   ```

4. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

### Stripe webhook (local development)

Booking records are created when Stripe confirms payment via a webhook, so
forward events to your local server with the Stripe CLI:

```bash
stripe listen --events checkout.session.completed --forward-to localhost:3000/api/webhook
```

Copy the webhook signing secret the CLI prints into `STRIPE_WEBHOOK_SECRET`
in your `.env`.

## Environment variables

All variables live in `.env` (never committed -- see `.env.example` for the
full list with descriptions):

| Variable | Purpose |
| --- | --- |
| `DB_URI` | MongoDB connection string |
| `NEXT_PUBLIC_STRIPE_API_KEY` | Stripe **publishable** key (safe for the browser) |
| `STRIPE_SECRET_KEY` | Stripe **secret** key (server only) |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for `/api/webhook` |
| `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` | Image uploads |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD` / `SMTP_FROM_EMAIL` / `SMTP_FROM_NAME` | Password-reset emails |

Only `NEXT_PUBLIC_STRIPE_API_KEY` is exposed to the browser; every other
variable stays server-side.

## Scripts

- `npm run dev` -- start the dev server
- `npm run build` -- production build
- `npm run start` -- run the production build
- `npm run lint` -- lint the project
- `npm run seeder` -- wipe and reseed the `rooms` collection from `data/rooms.json`

## Project structure

- `pages/` -- routes and API routes (`pages/api/**`)
- `components/` -- UI components, grouped by feature (`admin`, `auth`,
  `booking`, `room`, `review`, `layout`, ...)
- `controllers/` -- API route business logic
- `models/` -- Mongoose schemas
- `redux/` -- actions, reducers and store
- `middlewares/` -- auth guards and error handling for API routes
- `styles/` -- global design tokens (`globals.css`) and CSS Modules
