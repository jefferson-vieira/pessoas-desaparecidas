export interface CreateReportRequest {
  date: Date;
  description: string;
  info: string;
  ocoId: number;
  pictures?: FileList;
}
