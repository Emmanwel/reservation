import nc from "next-connect";
import withDb from "../../../utils/withDb";

import {
  createRoomReview,
  getRoomReviews,
  deleteReview,
} from "../../../controllers/roomController.js";

import onError from "../../../middlewares/errors";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const handler = nc({ onError });

handler.use(isAuthenticatedUser).put(createRoomReview);

handler.use(isAuthenticatedUser).get(getRoomReviews);

handler.use(isAuthenticatedUser).delete(deleteReview);

export default withDb(handler);
