import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { getBookingDetails } from "../../../controllers/bookingControllers";

import { isAuthenticatedUser } from "../../../middlewares/auth";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });

handler.use(isAuthenticatedUser).get(getBookingDetails);

export default withDb(handler);
