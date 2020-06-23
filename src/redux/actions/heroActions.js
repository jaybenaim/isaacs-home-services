import { SET_CURRENT_IMAGES, GET_ERRORS } from "./types";
import backend from "../../api/backend";
import firebase from "../../api/firebase";

export const refreshData = () => (dispatch) => {
  backend
    .get("/heroes?refresh=true")
    .then((res) => {
      let jsonData = JSON.stringify(res.data);
      localStorage.removeItem("heroes");
      // Add timeout function here set time key check against it
      localStorage.setItem("heroes", jsonData);

      dispatch(setCurrentImages(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const getHeroes = () => (dispatch) => {
  firebase
    .get("/heroes.json")
    .then((res) => {
      dispatch(setCurrentImages(res.data));
    })
    .catch((err) => console.log(err));
};
export const setCurrentImages = (data) => {
  return {
    type: SET_CURRENT_IMAGES,
    payload: data,
  };
};
