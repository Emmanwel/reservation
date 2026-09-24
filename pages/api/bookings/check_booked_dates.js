import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { checkBookedDatesOfRoom } from "../../../controllers/bookingControllers";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

handler.get(checkBookedDatesOfRoom);

export default withDb(handler);
