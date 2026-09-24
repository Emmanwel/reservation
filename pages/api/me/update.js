import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { updateProfile } from "../../../controllers/authController";

import { isAuthenticatedUser } from "../../../middlewares/auth";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });

handler.use(isAuthenticatedUser).put(updateProfile);

export default withDb(handler);
