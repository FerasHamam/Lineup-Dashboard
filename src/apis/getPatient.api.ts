import axios from "axios";
import { Patient } from "interfaces/PatientInterfaces";

export async function getPatient(id: string) {
  return axios.get<Patient>(`http://localhost:3030/patients/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
