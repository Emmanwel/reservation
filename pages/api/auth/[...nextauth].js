import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();

        const { email, password } = credentials;

        // Check if email and password is entered
        if (!email || !password) {
          throw new Error("Please enter email or password");
        }

        // Find user in the database
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        // Check if password is correct or not
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        // The JWT session cookie is signed but NOT encrypted, so its
        // contents are readable by anyone with the cookie (including
        // client-side JS). Never let the password hash or reset-token
        // fields end up in it -- only pass along what the app needs.
        return Promise.resolve({
          _id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          role: user.role,
        });
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
});

//session: async (session, user) => {
