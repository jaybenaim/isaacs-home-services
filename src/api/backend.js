import axios from "axios";

export default axios.create({
  baseURL: "https://isaacs-home-services.herokuapp.com/api",
});
