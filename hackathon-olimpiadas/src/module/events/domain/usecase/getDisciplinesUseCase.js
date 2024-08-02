const getDisciplinesUseCase = (repository) => async () => {
  try {
    const items = await repository();
    return ['Nenhuma', ...items]
  } catch (error) {
    throw error;
  }
};

export default getDisciplinesUseCase;
