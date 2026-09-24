import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { checkReviewAvailability } from "../../../controllers/roomController";

import onError from "../../../middlewares/errors";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const handler = nc({ onError });

handler.use(isAuthenticatedUser).get(checkReviewAvailability);

export default withDb(handler);
