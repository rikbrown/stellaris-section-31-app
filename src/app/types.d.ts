export interface Background {
  file: string;
}

export interface Icon {
  file: string;
}

export interface Flag {
  background: Background | null;
  colors: string[];
  icon: Icon | null;
}

export interface BasicCountryStats {
  economyPower: number;
  emigration: number;
  empireSize: number;
  flag: Flag;
  fleetSize: number;
  id: number;
  immigration: number;
  megastructureCount: number;
  militaryPower: number;
  name: string;
  techPower: number;
  traditionCount: number;
  victoryScore: number;
}

export interface PerennialCountryData {
  flag: Flag;
  id: number;
  name: string;
}

export interface AiAttitude {
  attitude: string;
  country: number;
}

export interface AiBehaviour {
  attitude: AiAttitude[];
}

export interface BudgetValues {
  alloys: number;
  consumerGoods: number;
  energy: number;
  engineeringResearch: number;
  exoticGases: number;
  food: number;
  influence: number;
  minerals: number;
  nanites: number;
  physicsResearch: number;
  rareCrystals: number;
  societyResearch: number;
  srDarkMatter: number;
  srZro: number;
  unity: number;
  volatileMotes: number;
}

export interface BudgetSheet {
  armies: BudgetValues;
  colonies: BudgetValues;
  countryBase: BudgetValues;
  orbitalMiningDeposits: BudgetValues;
  orbitalResearchDeposits: BudgetValues;
  planetAdministrators: BudgetValues;
  planetArtisans: BudgetValues;
  planetBuildings: BudgetValues;
  planetChemists: BudgetValues;
  planetCultureWorkers: BudgetValues;
  planetDistricts: BudgetValues;
  planetDoctors: BudgetValues;
  planetEnforcers: BudgetValues;
  planetEntertainers: BudgetValues;
  planetFarmers: BudgetValues;
  planetJobs: BudgetValues;
  planetMetallurgists: BudgetValues;
  planetMiners: BudgetValues;
  planetPopAssemblers: BudgetValues;
  planetPriests: BudgetValues;
  planetResearchers: BudgetValues;
  planetTechnicians: BudgetValues;
  planetTranslucers: BudgetValues;
  popCategoryRobots: BudgetValues;
  popCategoryRulers: BudgetValues;
  popCategorySlaves: BudgetValues;
  popCategorySpecialists: BudgetValues;
  popCategoryWorkers: BudgetValues;
  popFactions: BudgetValues;
  rivalries: BudgetValues;
  shipComponents: BudgetValues;
  ships: BudgetValues;
  starbaseBuildings: BudgetValues;
  starbaseModules: BudgetValues;
  starbaseStations: BudgetValues;
  stationGatherers: BudgetValues;
  stationResearchers: BudgetValues;
  tradeRoutes: BudgetValues;
}

export interface BudgetMonth {
  balance: BudgetSheet;
  expenses: BudgetSheet;
  income: BudgetSheet;
}

export interface Budget {
  lastMonth: BudgetMonth;
}

export interface TechStatus {
  technologies: string[];
}

export interface Country {
  ai: AiBehaviour | null;
  ascensionPerks: string[];
  autoShipDesigns: boolean;
  budget: Budget;
  economyPower: number;
  emigration: number;
  empireCohesion: number | null;
  empireSize: number;
  flag: Flag;
  fleetSize: number;
  graphicalCulture: string | null;
  immigration: number;
  militaryPower: number;
  name: string;
  ownedMegastructures: string[];
  techPower: number;
  techStatus: TechStatus;
  traditions: string[];
  victoryRank: number | null;
  victoryScore: number;
}

export interface Planet {
  branchOfficeBuildings: string[];
  builtArmies: number;
  colonizeDate: Date | null;
  crime: number;
  districts: string[];
  freeAmenities: number;
  freeHousing: number;
  growth: number;
  growthSpecies: number | null;
  migration: number;
  name: string;
  planetClass: string;
  planetSize: number;
  pops: number[];
  stability: number;
}

export interface Player {
  country: number;
  name: string;
}

export interface Species {
  name: string;
  plural: string;
  traits: string[];
}

export interface GameState {
  countries: { [key: number]: Country };
  date: Date;
  name: string;
  planets: { [key: number]: Planet };
  players: Player[];
  requiredDlcs: string[];
  species: Species[];
  version: string;
}

