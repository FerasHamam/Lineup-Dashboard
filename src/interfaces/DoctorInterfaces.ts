import { Case } from "./CaseInterfaces";
import { Patient } from "./PatientInterfaces";

export interface Doctor {
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
  isConsultant: boolean;
  patients: Patient[];
  cases: Case[];
}
