import { User } from "./user";

export enum Status {
  ACTIVE = "Активна",
  ACTIVE_LIMITED_GENERATION = "Активна: обмежена генерація",
  ACTIVE_PARTIALLY_DISABLED_EQUIPMENT = "Активна: частково вимкнене обладнання",
  INACTIVE = "Неактивна",
  INACTIVE_DISABLED_BY_DISPATCHER = "Неактивна: вимкнена диспетчером",
  INACTIVE_EMERGENCY_WORK = "Неактивна: аварійні роботи",
}
export const StatusDecode: any = {
  ACTIVE: "Активна",
  ACTIVE_LIMITED_GENERATION: "Активна: обмежена генерація",
  ACTIVE_PARTIALLY_DISABLED_EQUIPMENT: "Активна: частково вимкнене обладнання",
  INACTIVE: "Неактивна",
  INACTIVE_DISABLED_BY_DISPATCHER: "Неактивна: вимкнена диспетчером",
  INACTIVE_EMERGENCY_WORK: "Неактивна: аварійні роботи",
};
export enum Colors {
  Green = "#184700",
  Yellow = "#464700",
  Red = "#330000",
}

export enum StatusColors {
  ACTIVE = "#0cb800",
  ACTIVE_LIMITED_GENERATION = "#fca103",
  ACTIVE_PARTIALLY_DISABLED_EQUIPMENT = "#fca103",
  INACTIVE = "#8a0000",
  INACTIVE_DISABLED_BY_DISPATCHER = "#8a0000",
  INACTIVE_EMERGENCY_WORK = "#8a0000",
}

type Document = {
  name: string;
  url: string;
  documentType: string;
};

export type GeoLoc = {
  latitude: number;
  longitude: number;
};

export type Plant = {
  id: number;
  name: string;
  locationName: string;
  latitude: number;
  longitude: number;
  area: number;
  ascmePlantCode: string;
  status: Status;
  masterPlan: string;
  exploitationStart: string;
  acPower: number;
  dcPower: number;
  PVsystGenerationPlan: number[];
  plantModules: Document[];
  inverters: Document[];
  ktp: Document[];
  ownerId: number;
  ownerName: string;
};

export interface PlantResponseDto {
  readonly id: number | string;
  readonly ascmePlantCode: string;
  readonly name: string;
  readonly status: Status;
  readonly acPower: number | null;
  readonly dcPower: number | null;
  readonly pvsystGenerationPlan: number[] | null;
  readonly area: number | null;
  readonly exploitationStart: Date | null;
  readonly locationLongitude: number | null;
  readonly locationLatitude: number | null;
  readonly contactPersonName: string | null;
  readonly contactPersonPhone: string | null;
  readonly contactPersonEmail: string | null;
  readonly plantProductivityDeclineRate: any; //PlantProductivityDeclineRate | null;
  readonly plantStatusHistory?: any[]; //PlantStatusHistoryResponseDto[];
  readonly user?: any; //UserResponseDto;
  readonly documents: {
    id: number;
    createdAt: string;
    updatedAt: string;
    documentType: string;
    url: string;
    name: string;
  }[];
}

export type PlantName = Pick<Plant, "id" | "name">;
