import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { registerUser } from "../../../controllers/authController";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

handler.post(registerUser);

export default withDb(handler);
