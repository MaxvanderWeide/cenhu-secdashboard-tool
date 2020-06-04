export interface Incident {
  message: string;
  severity: string;
  url?: string;
  department?: string;
  open?: boolean;
  year: number;
}
