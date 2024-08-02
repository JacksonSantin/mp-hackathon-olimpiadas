import Disciplines from "../../domain/model/disciplines";

const getDisciplinesRepository = (axios) => async () => {
  try {
    const response = await axios.get("/disciplines");

    return (
      response?.data?.data?.map((discipline) => new Disciplines(discipline)) ??
      []
    );
  } catch (error) {
    throw error;
  }
};

export default getDisciplinesRepository;
