import nc from "next-connect";
import withDb from "../../utils/withDb";

import { webhookCheckout } from "../../controllers/paymentControllers";

import onError from "../../middlewares/errors";

const handler = nc({ onError });

export const config = {
  api: {
    bodyParser: false,
  },
};

handler.post(webhookCheckout);

export default withDb(handler);
