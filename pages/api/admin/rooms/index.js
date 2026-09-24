import nc from "next-connect";
import withDb from "../../../../utils/withDb";

import { allAdminRooms } from "../../../../controllers/roomController";

import onError from "../../../../middlewares/errors";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../../../../middlewares/auth";

const handler = nc({ onError });

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminRooms);

export default withDb(handler);
