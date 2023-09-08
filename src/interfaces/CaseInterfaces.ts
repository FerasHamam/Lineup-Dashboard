export interface Case {
  id: number;
  patientID: number;
  doctorID: number;
  status: string;
  numOfSteps: number;
  files: File[];
}
