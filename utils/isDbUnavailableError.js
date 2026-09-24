// True when an axios error came from the API's withDb wrapper failing to
// reach the database (see utils/withDb.js). Used to skip showing an error
// toast for passive, page-load-triggered fetches (room listings, booking
// lists, ...) while the database isn't configured yet, so the site still
// looks intentional -- just empty -- rather than broken. Errors from
// something the user actively did (login, submit a review, ...) still
// show feedback as normal; silence there would be its own confusing bug.
const isDbUnavailableError = (error) => {
  return error?.response?.data?.code === "DB_UNAVAILABLE";
};

export default isDbUnavailableError;
