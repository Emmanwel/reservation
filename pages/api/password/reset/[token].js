import nc from "next-connect";
import withDb from "../../../../utils/withDb";

import { resetPassword } from "../../../../controllers/authController";

import onError from "../../../../middlewares/errors";

const handler = nc({ onError });

handler.put(resetPassword);

export default withDb(handler);
