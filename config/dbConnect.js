import mongoose from "mongoose";

let connectionPromise = null;

// Returns a promise that resolves once Mongoose is connected. Every API
// route awaits this before touching the database instead of firing
// `dbConnect()` and moving on -- otherwise the very first query after a
// cold start races the connection and, on any DB problem, the request just
// hangs until the platform kills the whole function (Vercel's
// 504 FUNCTION_INVOCATION_TIMEOUT) instead of failing fast with a clean
// JSON error.
//
// serverSelectionTimeoutMS is set well under typical serverless function
// timeouts so an unreachable/misconfigured database (wrong URI, or an
// Atlas cluster that hasn't allow-listed the host's IP) surfaces as a
// normal caught error in a few seconds rather than a platform-level hang.
const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return Promise.resolve();
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 8000,
      })
      .catch((error) => {
        // Let the next call retry instead of caching a rejected connection.
        connectionPromise = null;
        throw error;
      });
  }

  return connectionPromise;
};

export default dbConnect;
