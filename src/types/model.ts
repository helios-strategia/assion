import { SourcePoint } from "./sourcePoint";

export interface Row {
  date: string;
  companyCode: number;
  sum: number;
}

export enum RowsChannel30818 {
  ACTIVE_INPUT = "Актив прием",
  ACTIVE_OUTPUT = "Актив отдача",
  REACTIVE_INPUT_Q1 = "Реактив прием (Квадрант 1)",
  REACTIVE_INPUT_Q2 = "Реактив прием (Квадрант 2)",
  REACTIVE_OUTPUT_Q3 = "Реактив отдача (Квадрант 3)",
  REACTIVE_OUTPUT_Q4 = "Реактив отдача (Квадрант 4)"
}

export enum RowsChannel30917 {
  ACTIVE_INPUT = "Актив прием",
  ACTIVE_OUTPUT = "Актив отдача",
  REACTIVE_INPUT = "Реактив прием",
  REACTIVE_OUTPUT = "Реактив отдача"
}

export interface Row30818 extends Row {
  sourcePoint: SourcePoint;
  channel: RowsChannel30818;
  kVtPerTariff1: number;
  kVtPerTariff2: number;
  kVtPerTariff3: number;
}

export interface Row30817 extends Row {
  sourcePoint: SourcePoint;
  kVtPerHour: number[];
}

export interface Row30917 extends Row {
  sourcePoint: SourcePoint;
  channel: RowsChannel30917;
  kVtPerHalfHour: number[];
}