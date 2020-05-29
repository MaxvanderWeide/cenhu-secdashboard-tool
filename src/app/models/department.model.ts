export interface Department {
  name: string;
  cleanUrl: string;
  data?: {
    mainStatistics: {}[];
    incidents: {
      total: number;
      open: number;
    };
    academy?: {}[];
  };
}
