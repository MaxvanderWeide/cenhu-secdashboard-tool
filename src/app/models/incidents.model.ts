export interface Incident {
  message: string;
  severity: string;
  url?: string;
  department?: string;
  open?: boolean;
  filed: string;
  id: string;
  departmentName?: string;
}
