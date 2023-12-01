import {
  FilmType,
  PersonType,
  PlanetType,
  SpeciesType,
  StarshipType,
  VehiclesType,
} from '../types';

export const isPerson = (item: any): item is PersonType => {
  return item;
};

export const isPlanet = (item: any): item is PlanetType => {
  return item;
};

export const isShips = (item: any): item is StarshipType => {
  return item;
};

export const isFilms = (item: any): item is FilmType => {
  return item;
};

export const isVehicles = (item: any): item is VehiclesType => {
  return item;
};

export const isSpecies = (item: any): item is SpeciesType => {
  return item;
};
