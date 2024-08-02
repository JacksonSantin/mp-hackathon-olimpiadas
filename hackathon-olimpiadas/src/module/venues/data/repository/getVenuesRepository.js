import Venues from "../../domain/model/venues";

const getVenuesRepository = (axios) => async () => {
  try {
    const response = await axios.get("/venues");

    return response?.data?.data?.map((venue) => new Venues(venue)) ?? [];
  } catch (error) {
    throw error;
  }
};

export default getVenuesRepository;
