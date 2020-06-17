import { SET_DATA, GET_ERRORS } from "./types";
import local from "../../api/local";
import firebaseDb from "../../api/firebase";

export const refreshData = () => (dispatch) => {
  local
    .get("/services?refresh=true")
    .then((res) => {
      dispatch(getData());
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const getData = (data) => (dispatch) => {
  // get data from firebase
  firebaseDb
    .get("/services.json")
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
