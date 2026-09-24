import nc from "next-connect";
import withDb from "../../utils/withDb";

import { currentUserProfile } from "../../controllers/authController";

 import { isAuthenticatedUser } from "../../middlewares/auth";
import onError from "../../middlewares/errors";

const handler = nc({ onError });

handler.use(isAuthenticatedUser).get(currentUserProfile);

export default withDb(handler);
