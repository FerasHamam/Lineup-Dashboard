import axios from "axios";
import { Patient } from "interfaces/PatientInterfaces";

export async function getPatients() {
  return axios.get<Patient[]>(`http://localhost:3030/patients`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
