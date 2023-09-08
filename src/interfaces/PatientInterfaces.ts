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
