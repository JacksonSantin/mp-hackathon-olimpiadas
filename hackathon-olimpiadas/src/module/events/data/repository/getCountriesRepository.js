import Countries from "../../domain/model/countries";

const getCountriesRepository = (axios) => async () => {
  try {
    let allCountries = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const response = await axios.get(`/countries?page=${currentPage}`);

      const countries =
        response?.data?.data?.map((country) => new Countries(country)) ?? [];
      allCountries = [...allCountries, ...countries];

      totalPages = response?.data?.meta?.last_page ?? 1;
      currentPage++;
    }

    return {
      items: allCountries,
      count: allCountries.length,
    };
  } catch (error) {
    throw error;
  }
};

export default getCountriesRepository;
