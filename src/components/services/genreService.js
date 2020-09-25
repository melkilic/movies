/** @format */

import http from "./httpService";
import { apiUrl } from "../config.json";

export default function getGenres() {
  return http.get(apiUrl + "/genres");
}
