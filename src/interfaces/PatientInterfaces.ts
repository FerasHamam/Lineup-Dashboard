import { Case } from "./CaseInterfaces";

export interface Patient {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profilePic: string;
  role: string;
  gender: string;
  age: number;
  password: string;
  location: string;
  address: string;
  cases: Case[];
  fromEcommerce: boolean;
  type: string;
  status: string;
}

export enum PatientType {
  ALL = "All",
  WEBSITE = "Website",
  FROM_DOC = "From Doctor",
}

export enum PatientStatus {
  ALL = "All",
  REGISTERED = "Registered",
  WAITING_FOR_IK = "Waiting for IK",
  UNDER_TREATMENT = "Under Treatment",
  AWAITING_REVIEW = "Awaiting Review",
  FINISHED = "Finished",
}
