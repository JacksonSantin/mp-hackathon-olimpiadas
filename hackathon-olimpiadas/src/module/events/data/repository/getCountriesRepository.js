import Countries from "../../domain/model/countries";

const getCountriesRepository = (axios) => async () => {
  try {
    const response = await axios.get("/countries");

    return response?.data?.data?.map((country) => new Countries(country)) ?? [];
  } catch (error) {
    throw error;
  }
};

export default getCountriesRepository;
