import {Academy} from '@models/academy.model';

export interface Department {
  name: string;
  cleanUrl: string;
  data?: {
    mainStatistics: {
      name: string;
      data: number;
    }[];
    incidents: {
      message: string;
      severity: string;
      url?: string;
      closed: boolean;
    }[];
    academy?: Academy[];
  };
}
