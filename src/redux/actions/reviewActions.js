import { GET_REVIEWS, SET_REVIEWS, ADD_REVIEW, GET_ERRORS } from "./types";
import firebase from "../../api/firebase";

export const getReviews = () => (dispatch) => {
  firebase
    .get("/reviews.json")
    .then((res) => {
      dispatch(setReviews(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const addReview = (review) => (dispatch) => {
  firebase
    .post("/reviews.json", review)
    .then((res) => {
      dispatch(getReviews());
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};
export const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  };
};
