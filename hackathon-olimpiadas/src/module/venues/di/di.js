import { axiosInstance } from "@/core/axios";
import {venuesController} from "../controller/venuesController";

import getVenuesRepository from "../data/repository/getVenuesRepository";
import getVenuesUseCase from "../domain/usecase/getVenuesUseCase";

const getVenuesRepositoryImpl = getVenuesRepository(axiosInstance);
const getVenuesUseCaseImpl = getVenuesUseCase(getVenuesRepositoryImpl);

export const venuesControllerImpl = venuesController(
  getVenuesUseCaseImpl
);
