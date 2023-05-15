// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = {
  env: {
    //DB_LOCAL_URI: "mongodb+srv://riam:riam1@kale.xjes3.mongodb.net/test",
    DB_URI:
      "mongodb+srv://riam:riam1@kale.xjes3.mongodb.net/kale?retryWrites=true&w=majority",

    STRIPE_API_KEY:
      "pk_test_51KYuKkLqKqksVJfuyjhPFQVCsD1Gbl1uE7ZQGwXcHG0xrCcgO0qVKnTjGubQ6ObyQ7aiRS7m7q5yVRcGcjtfIYOq00vJjmXUng",
    STRIPE_SECRET_KEY:
      "sk_test_51KYuKkLqKqksVJfuGlk7BsetNkyobfDZhFKn4MHtbK1p91P0dvlgX7ycR2gxvFg1Q0VRNENzfkKXYwNPOoHI9J2n001KF8dfkD",

    //STRIPE_WEBHOOK_SECRET: "whsec_OEfMOse3Vow4KU5JKnP04yexE4BcNlWi",

    STRIPE_WEBHOOK_SECRET:
      "whsec_a1223b72766ab68ab7903dbb5ac6c6990e58fc81ea8ba51d2464154d8cebab93",

    CLOUDINARY_CLOUD_NAME: "buluma",
    CLOUDINARY_API_KEY: "725726772621631",
    CLOUDINARY_API_SECRET: "O9aqgaShXCu8_Fj-8xe-88rzTIU",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "03a735978df11d",
    SMTP_PASSWORD: "d26cf235f12525",
    SMTP_FROM_EMAIL: "noreply@resorts.com",
    SMTP_FROM_NAME: "Resorts Reservation",

    //NEXTAUTH_URL:'https://reserveyourroom.vercel.app',
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
