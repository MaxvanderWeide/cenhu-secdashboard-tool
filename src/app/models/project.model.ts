export interface Project {
  projectId: string;
  apiAccessData: [];
  errors?: {
   errorDate: string;
   stackTrace: string;
  }[];
  failedAccess?: {
    requestDate: string;
  }[];
  buildData?: {
    buildId: number,
    buildStart: string,
    buildEnd: string,
    status: string,
    buildUrl: string
  };
}
