export interface Employee {
  id?: number,
  name: string,
  surname: string,
  phone: string,
  avatarUrl?: string,
  plantId?: number,
  positionId?: number,
  status?: boolean,
  plantName?: string
  positionName?: string
  scheduleScheme: ScheduleScheme
}

export interface CreateEmployeeRequest {
  name: string;
  surname: string;
  phone: string;
  avatar: File;
  plantId: number;
  positionId: number;
  scheduleScheme: ScheduleSchemeRequest;
}

export interface UpdateEmployeeRequest extends CreateEmployeeRequest {
  id: number
}

export interface ScheduleSchemeRequest {
  startWorkDateTime: number,
  workHoursAmount: number,
  scheduleType: ScheduleType,
  vacations?: [number, number],
  restHoursAmount?: number
}

export interface ScheduleScheme {
  startWorkDateTime: Date,
  workHoursAmount: number,
  scheduleType: ScheduleType,
  vacations?: [Date, Date],
  restHoursAmount?: number
}

export enum ScheduleType {
  FIVE_DAYS_WORK_WEEK = "FIVE_DAYS_WORK_WEEK",
  WORKING_SHIFT = "WORKING_SHIFT"
}

export const ScheduleTypeRead = {
  FIVE_DAYS_WORK_WEEK: '5-ти дений стандартний графік',
  WORKING_SHIFT: 'Позмінний графік'
}