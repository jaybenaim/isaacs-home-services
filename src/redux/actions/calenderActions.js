import { SET_EVENTS, ADD_EVENTS } from "./types";
import firebaseDb from "../../api/firebase";
// TODO: setdispatch errors
export const getEvents = () => (dispatch) => {
  // get from firebase

  firebaseDb
    .get("/events.json")
    .then((res) => {
      dispatch(setEventList(res.data));
    })
    .catch((err) => console.log(err));
};

export const addToEvents = (event) => (dispatch) => {
  firebaseDb
    .post("/events.json", event)
    .then((res) => {
      dispatch(addEvent(event));
    })
    .catch((err) => console.log(err));
};

export const addEvent = (data) => {
  return {
    type: ADD_EVENTS,
    payload: data,
  };
};
export const setEventList = (data) => {
  return {
    type: SET_EVENTS,
    payload: data,
  };
};
