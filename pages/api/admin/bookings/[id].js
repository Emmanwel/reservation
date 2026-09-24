import nc from "next-connect";
import withDb from "../../../../utils/withDb";

import { deleteBooking } from "../../../../controllers/bookingControllers";

import onError from "../../../../middlewares/errors";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../../../../middlewares/auth";

const handler = nc({ onError });

handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteBooking);

export default withDb(handler);
