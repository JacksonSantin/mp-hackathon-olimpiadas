import { axiosInstance } from "@/core/axios";
import {olympicsController} from "../controller/olympicsController";

import getQtdCountriesRepository from "../data/repository/getQtdCountriesRepository";

import getCountriesRepository from "../data/repository/getCountriesRepository";
import getCountriesUseCase from "../domain/usecase/getCountriesUseCase";

const getQtdCountriesRepositoryImpl = getQtdCountriesRepository(axiosInstance)

const getCountriesRepositoryImpl = getCountriesRepository(axiosInstance);
const getCountriesUseCaseImpl = getCountriesUseCase(getCountriesRepositoryImpl, getQtdCountriesRepositoryImpl);

export const olympicsControllerImpl = olympicsController(
  getCountriesUseCaseImpl
);
