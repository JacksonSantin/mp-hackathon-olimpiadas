const getCountriesUseCase = (repository, getQtdCountriesRepository) => async (page) => {
  try {
    const items = await repository(page);
    const count = await getQtdCountriesRepository(items);
    return { items, count };
  } catch (error) {
    throw error;
  }
};

export default getCountriesUseCase;
