import nc from "next-connect";
import withDb from "../../../../utils/withDb";

import { allAdminUsers } from "../../../../controllers/authController";

import onError from "../../../../middlewares/errors";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../../../../middlewares/auth";

const handler = nc({ onError });

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminUsers);

export default withDb(handler);
