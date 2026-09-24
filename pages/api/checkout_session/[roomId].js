import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { stripCheckoutSession } from "../../../controllers/paymentControllers";
import { isAuthenticatedUser } from "../../../middlewares/auth";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

handler.use(isAuthenticatedUser).get(stripCheckoutSession);

export default withDb(handler);
