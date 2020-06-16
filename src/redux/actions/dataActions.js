import { SET_DATA, GET_ERRORS } from "./types";
import local from "../../api/local";

import services from "../../data/services/services.json";

export const refreshData = () => (dispatch) => {
  local
    .get("/services")
    .then((res) => {
      dispatch(convertToJson(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const getData = () => (dispatch) => {
  dispatch(setData(services));
};
const convertToJson = (data) => (dispatch) => {
  // write to json here

  dispatch(setData(data));
};
export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
