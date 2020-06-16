import { SET_DATA, GET_ERRORS } from "./types";
import local from "../../api/local";
import axios from "axios";

export const refreshData = () => (dispatch) => {
  local
    .get("/services")
    .then((res) => {
      console.log(res.data);
      dispatch(getData(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const getData = (data) => (dispatch) => {
  // get data from firebase
  axios
    .get("https://network-king-5740f.firebaseio.com/services.json")
    .then((res) => dispatch(setData(res.data)))
    .catch((err) => console.log(err));
  // dispatch(setData(services));
};

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
