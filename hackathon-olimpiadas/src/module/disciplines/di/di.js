import { axiosInstance } from "@/core/axios";
import {disciplinesController} from "../controller/disciplinesController";

import getDisciplinesRepository from "../data/repository/getDisciplinesRepository";
import getDisciplinesUseCase from "../domain/usecase/getDisciplinesUseCase";

const getDisciplinesRepositoryImpl = getDisciplinesRepository(axiosInstance);
const getDisciplinesUseCaseImpl = getDisciplinesUseCase(getDisciplinesRepositoryImpl);

export const disciplinesControllerImpl = disciplinesController(
  getDisciplinesUseCaseImpl
);
