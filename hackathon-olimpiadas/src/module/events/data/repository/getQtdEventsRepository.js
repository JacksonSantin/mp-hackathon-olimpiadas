const getQtdEventsRepository = (axios) => async (filters) => {
  try {
    const response = await axios.get("/events", {
      params: { ...filters },
    });

    return response?.data?.meta?.total ?? 0;
  } catch (error) {
    throw error;
  }
};

export default getQtdEventsRepository;
