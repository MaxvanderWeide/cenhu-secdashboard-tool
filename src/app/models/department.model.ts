export interface Department {
  department: string;
  cleanUrl: string;
  code?: string;
  employees?: number;
  performances?: {
    year: number;
    performance: number;
  }[];
  statistics?: {
    data?: {
      employees: number;
      vulnerability: string;
      averagePerformance: number;
      yearPerformance: number;
    },
    incidents?: {
      total: number;
      closed: number;
      open: number;
    }
  };
}
