import Events from "../../domain/model/events";

const getEventsRepository = (axios) => async (filters, page) => {
  try {
    const response = await axios.get("/events", {
      params: { ...filters, page: page },
    });

    return (
      response?.data?.data?.map((event) => new Events(event)) ?? []
    );
  } catch (error) {
    throw error;
  }
};

export default getEventsRepository;
