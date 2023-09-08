import axios from "axios";
import { Doctor } from "interfaces/DoctorInterfaces";

export async function getDoctor(id: string) {
  return axios.get<Doctor>(`http://localhost:3030/doctors/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
