import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  hotelId: {
    required: true,
    type: ObjectId,
  },
  userId: {
    required: true,
    type: ObjectId,
  },
  checkIn: {
    required: true,
    type: String,
  },
  checkOut: {
    required: true,
    type: String,
  },
});

export const bookingModel =
  mongoose.models.bookings ?? mongoose.model("booking", bookingSchema);
