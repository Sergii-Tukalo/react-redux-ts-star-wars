import { RootStateAllPeopleType } from '../store/reducers/reducerAllPeople';

//root
export type RootStateType = {
  loading: boolean;
  category: PersonsType | null;
  itemDetails: PersonType | null;
  relatedCategory: RelatedCategory | null;
};

export type RelatedCategory = {
  planets: { id: number; name: string };
  people: { id: number; name: string };
  films: { id: number; name: string };
  vehicles: { id: number; name: string };
  starships: { id: number; name: string };
};

export type RootStatePaginationType = {
  currentPage: number;
};

export type reducerType = {
  mainState: RootStateType;
  pagination: RootStatePaginationType;
  allPeople: RootStateAllPeopleType;
  categories: RootStateCategories;
};

//person
export type PersonsType = {
  count: number;
  next: string;
  previous: null | string;
  results: PersonType[];
};

export type PersonType = {
  id: number;
  imgUrl: string;
  category: string;
  typeDetail: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species?: any;
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

//starships
export type StarshipType = {
  id: number;
  category: string;
  imgUrl: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

//planet
export type PlanetType = {
  id: number;
  category: string;
  imgUrl: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

//categories

export type RootStateCategories = {
  categories: Categories[];
  loading: boolean;
};

export type Categories = {
  id: string;
  url: string;
  imgUrl: string;
};

export type FilmType = {
  id: number;
  imgUrl: string;
  title: string;
  episode_id: string;
  category: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
  filter: boolean;
  count: number;
};

export type VehiclesType = {
  id: number;
  imgUrl: string;
  name: string;
  category: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type SpeciesType = {
  id: number;
  category: string;
  imgUrl: string;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  filter: boolean;
  count: number;
};
