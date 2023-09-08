import axios from "axios";
import { Doctor } from "interfaces/DoctorInterfaces";

export async function getDoctors() {
  return axios.get<Doctor[]>(`http://localhost:3030/doctors`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
