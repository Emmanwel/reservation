// Safely pulls a human-readable message out of an axios error, whether it
// failed with a response from the server, a network error, or something
// else entirely -- so a failed request never throws a second, more
// confusing error while we're trying to report the first one.
const getErrorMessage = (error, fallback = "Something went wrong. Please try again.") => {
  return error?.response?.data?.message || error?.message || fallback;
};

export default getErrorMessage;
