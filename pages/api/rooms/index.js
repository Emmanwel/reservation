import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { allRooms, newRoom } from "../../../controllers/roomController";

import onError from "../../../middlewares/errors";
import { isAuthenticatedUser, authorizeRoles } from "../../../middlewares/auth";

const handler = nc({ onError });

handler.get(allRooms);

handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(newRoom);

export default withDb(handler);
