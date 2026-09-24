import nc from "next-connect";
import withDb from "../../../../utils/withDb";

import { allAdminBookings } from "../../../../controllers/bookingControllers";

import onError from "../../../../middlewares/errors";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../../../../middlewares/auth";

const handler = nc({ onError });

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminBookings);

export default withDb(handler);
