import nc from "next-connect";
import withDb from "../../../utils/withDb";

import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomController.js";

import onError from "../../../middlewares/errors";
import { isAuthenticatedUser, authorizeRoles } from "../../../middlewares/auth";

const handler = nc({ onError });

handler.get(getSingleRoom);

handler.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateRoom);

handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteRoom);

export default withDb(handler);
