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

export const getData = () => (dispatch) => {
  // Cached Fetch
  let localData = localStorage.getItem("services");
  // Get data from local storage if available if not make api call
  if (!localData) {
    // get data from firebase
    firebaseDb
      .get("/services.json")
      .then((res) => {
        let jsonData = JSON.stringify(res.data);
        localStorage.setItem("services", jsonData);

        dispatch(setData(res.data));
      })
      .catch((err) => console.log(err));
  }
  let parsedData = JSON.parse(localData);
  dispatch(setData(parsedData));

  // firebaseDb
  //   .get("/services.json")
  //   .then((res) => {
  //     dispatch(setData(res.data));
  //   })
  //   .catch((err) => console.log(err));
};

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
