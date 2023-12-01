import {
  FilmType,
  PersonType,
  PlanetType,
  SpeciesType,
  StarshipType,
  VehiclesType,
} from '../types';

export const sortCondition = (
  allPeople:
    | VehiclesType[]
    | PersonType[]
    | PlanetType[]
    | FilmType[]
    | SpeciesType[]
    | StarshipType[],
  sortBy: null | string
) => {
  if (sortBy === 'height-low') {
    (allPeople as VehiclesType[]).sort((a, b) => +b.length - +a.length);
    (allPeople as PersonType[]).sort((a, b) => +b.height - +a.height);
    (allPeople as PlanetType[]).sort((a, b) => +b.diameter - +a.diameter);
    (allPeople as StarshipType[]).sort((a, b) => +b.length - +a.length);
    (allPeople as FilmType[]).sort((a, b) => {
      let aItem = a.release_date ? +a.release_date.split('-')[0] : 0;
      let bItem = b.release_date ? +b.release_date.split('-')[0] : 0;
      return bItem - aItem;
    });
    (allPeople as SpeciesType[]).sort(
      (a, b) => +b.average_height - +a.average_height
    );
  }
  if (sortBy === 'low-height') {
    (allPeople as VehiclesType[]).sort((a, b) => +a.length - +b.length);
    (allPeople as PersonType[]).sort((a, b) => +a.height - +b.height);
    (allPeople as PlanetType[]).sort((a, b) => +a.diameter - +b.diameter);
    (allPeople as StarshipType[]).sort((a, b) => +a.length - +b.length);
    (allPeople as FilmType[]).sort((a, b) => {
      let aItem = a.release_date ? +a.release_date.split('-')[0] : 0;
      let bItem = b.release_date ? +b.release_date.split('-')[0] : 0;
      return aItem - bItem;
    });
    (allPeople as SpeciesType[]).sort(
      (a, b) => +a.average_height - +b.average_height
    );
  }
  return allPeople;
};
