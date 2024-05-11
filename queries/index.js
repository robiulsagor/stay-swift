import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/service-utils";

export const getAllHotels = async () => {
  try {
    const hotels = await hotelModel.find().lean();
    return replaceMongoIdInArray(hotels);
  } catch (error) {
    throw new Error(error);
  }
};
