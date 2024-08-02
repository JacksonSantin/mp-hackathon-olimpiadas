const getQtdCountriesRepository = (axios) => async () => {
  try {
    const response = await axios.get("/countries");

    return response?.data?.meta?.total ?? 0;
  } catch (error) {
    throw error;
  }
};

export default getQtdCountriesRepository;
