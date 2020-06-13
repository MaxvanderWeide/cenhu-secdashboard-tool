export interface Project {
  projectId: string;
  accessData: {
    resource: string;
    method?: string;
    requestDate: string;
  }[];
  errors?: {
    errorDate: string;
    stackTrace: string;
  }[];
  failedAccess?: {
    requestDate: string;
  }[];
  buildData?: {
    buildId: number;
    buildStart: string;
    buildEnd: string;
    status: string;
    buildUrl: string;
  };
}
