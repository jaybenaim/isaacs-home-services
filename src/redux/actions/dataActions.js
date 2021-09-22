import { SET_DATA, GET_ERRORS } from "./types";
import backend from "../../api/backend";
import firebaseDb from "../../api/firebase";

export const refreshData = () => async (dispatch) => {
  await backend
    .get("/services?refresh=true")
    .then((res) => {
      let jsonData = JSON.stringify(res.data);
      localStorage.removeItem("services");
      // Add timeout function here set time key check against it
      localStorage.setItem("services", jsonData);

      dispatch({
        type: SET_DATA,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const getData = (refresh = false) => async (dispatch) => {
  let url = "/services"
  if (refresh) {
    url += "?refresh=true"
  }

  // Load cached data
  dispatch({
    type: SET_DATA,
    payload: JSON.parse(localStorage.getItem('services'))
  });

  // Get fresh data once heroku is running
  try {
    await backend
    .get(url)
    .then((res) => {
      let jsonData = JSON.stringify(res.data);
      localStorage.removeItem("services");
      // Add timeout function here set time key check against it
      localStorage.setItem("services", jsonData);

      dispatch({
        type: SET_DATA,
        payload: res.data
      });
    })
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
}

// export const getData = () => (dispatch) => {
//   // // Cached Fetch
//   let localData = localStorage.getItem("services");
//   // Get data from local storage if available if not make api call
//   if (!localData) {
//     // get data from firebase
//     firebaseDb
//       .get("/services.json")
//       .then((res) => {
//         let jsonData = JSON.stringify(res.data);
//         // Add timeout function here set time key check against it
//         localStorage.setItem("services", jsonData);

//         dispatch(setData(res.data));
//       })
//       .catch((err) => console.log(err));
//   }
//   let parsedData = JSON.parse(localData);
//   dispatch(setData(parsedData));

//   firebaseDb
//     .get("/services.json")
//     .then((res) => {
//       dispatch(setData(res.data));
//     })
//     .catch((err) => console.log(err));
// };

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
