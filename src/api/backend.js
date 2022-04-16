import axios from "axios";
import local from "./local";

let baseUrl = undefined;

if (process.env.NODE_ENV === "development") {
  baseUrl = local;
} else {
  baseUrl = axios.create({
    baseURL: "https://isaacs-home-services.herokuapp.com/api",
  });
}

export default baseUrl;
