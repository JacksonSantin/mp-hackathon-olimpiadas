const getEventsUseCase = (repository, getQtdEventsRepository) => async (filters, page) => {
  try {
    const items = await repository(filters, page);
    const count = await getQtdEventsRepository(filters);
    return { items, count };
  } catch (error) {
    throw error;
  }
};

export default getEventsUseCase;
