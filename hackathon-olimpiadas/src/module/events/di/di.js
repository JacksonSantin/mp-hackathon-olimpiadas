import { axiosInstance } from "@/core/axios";
import {eventsController} from "../controller/eventsController";

import getQtdEventsRepository from "../data/repository/getQtdEventsRepository";

import getEventsRepository from "../data/repository/getEventsRepository";
import getEventsUseCase from "../domain/usecase/getEventsUseCase";

import getCountriesRepository from "../data/repository/getCountriesRepository";
import getCountriesUseCase from "../domain/usecase/getCountriesUseCase";

import getDisciplinesRepository from "../data/repository/getDisciplinesRepository";
import getDisciplinesUseCase from "../domain/usecase/getDisciplinesUseCase";

import getVenuesRepository from "../data/repository/getVenuesRepository";
import getVenuesUseCase from "../domain/usecase/getVenuesUseCase";

const getQtdEventsRepositoryImpl = getQtdEventsRepository(axiosInstance)

const getEventsRepositoryImpl = getEventsRepository(axiosInstance);
const getEventsUseCaseImpl = getEventsUseCase(getEventsRepositoryImpl, getQtdEventsRepositoryImpl);

const getCountriesRepositoryImpl = getCountriesRepository(axiosInstance)
const getCountriesUseCaseImpl = getCountriesUseCase(getCountriesRepositoryImpl)

const getDisciplinesRepositoryImpl = getDisciplinesRepository(axiosInstance)
const getDisciplinesUseCaseImpl = getDisciplinesUseCase(getDisciplinesRepositoryImpl)

const getVenuesRepositoryImpl = getVenuesRepository(axiosInstance)
const getVenuesUseCaseImpl = getVenuesUseCase(getVenuesRepositoryImpl)

export const eventsControllerImpl = eventsController(
  getEventsUseCaseImpl,
  getCountriesUseCaseImpl,
  getDisciplinesUseCaseImpl,
  getVenuesUseCaseImpl
);
