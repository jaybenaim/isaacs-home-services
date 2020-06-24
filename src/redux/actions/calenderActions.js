import { SET_EVENTS, ADD_EVENTS, GET_ERRORS } from "./types";
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
      let firebaseId = res.data.name;
      dispatch(addEvent(event, firebaseId));
    })
    .catch((err) => console.log(err));
};

export const deleteEvent = (event) => (dispatch) => {
  const { firebaseId } = event;

  firebaseDb
    .delete(`/events/${firebaseId}.json`)
    .then((res) => {
      dispatch(getEvents());
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};
export const addEvent = (event, firebaseId) => {
  return {
    type: ADD_EVENTS,
    payload: { event, firebaseId },
  };
};
export const setEventList = (data) => {
  return {
    type: SET_EVENTS,
    payload: data,
  };
};
