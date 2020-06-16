import { SET_DATA, GET_ERRORS } from "./types";
import local from "../../api/local";

export const refreshData = () => (dispatch) => {
  local
    .get("/services")
    .then((res) => {
      dispatch(setData(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
