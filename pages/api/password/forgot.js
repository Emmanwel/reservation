import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { forgotPassword } from "../../../controllers/authController";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

handler.post(forgotPassword);

export default withDb(handler);
