import nc from "next-connect";
import withDb from "../../../utils/withDb";

import { checkRoomBookingAvailability } from "../../../controllers/bookingControllers";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

handler.get(checkRoomBookingAvailability);

export default withDb(handler);
