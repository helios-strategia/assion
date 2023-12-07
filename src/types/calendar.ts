export interface CalendarEvent {
  id?: string;
  allDay: boolean;
  color?: string;
  description: string;
  end: number;
  start: number;
  title: string;
}

export interface CalendarEventWithEventType extends CalendarEvent {
  calendarEventType?: CalendarEventType;
}

export enum CalendarEventType {
  PlannedWork = 'PLANNED_WORK',
  TroubleShooting = 'TROUBLESHOOTING',
  Failure = 'FAILURE'
}

export enum CalendarEventTypeReadable {
  PlannedWork = 'Заплановані работи',
  TroubleShooting = "Ремонтні роботи",
  Failure = "Аварія"
}

export enum CalendarEventTypeReadableMapped {
  PLANNED_WORK = 'Заплановані работи',
  TROUBLESHOOTING = "Ремонтні роботи",
  FAILURE = "Аварія"
}

export type CalendarView =
  | 'dayGridMonth'
  | 'timeGridWeek'
  | 'timeGridDay'
  | 'listWeek';
