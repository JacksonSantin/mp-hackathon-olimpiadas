import Medals from "../../domain/model/medals";

const getCountriesRepository = (axios) => async (page) => {
  try {
    const response = await axios.get("/countries", {
      params: { page: page },
    });

    return (
      response?.data?.data?.map((country) => new Medals(country)) ?? []
    );
  } catch (error) {
    throw error;
  }
};

export default getCountriesRepository;
