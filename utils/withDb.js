import dbConnect from "../config/dbConnect";

// Wraps a next-connect handler so the database connection is awaited
// before the request is handled. If the connection fails (wrong URI,
// unreachable cluster, IP not allow-listed, ...) this responds with the
// same clean JSON shape the rest of the app's error handling expects,
// in a few seconds -- instead of the request hanging until the platform
// itself times out the whole function.
const withDb = (handler) => async (req, res) => {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error.message);
    res.status(500).json({
      success: false,
      code: "DB_UNAVAILABLE",
      message:
        "We couldn't reach the database right now. Please try again shortly.",
    });
    return;
  }

  return handler(req, res);
};

export default withDb;
