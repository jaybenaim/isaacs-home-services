import { SET_REVIEWS } from "../actions/types";

const initialState = {
  reviews: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_REVIEWS:
      let reviews = action.payload;
      let updatedReviews = [];
      for (let id in reviews) {
        let updatedReview = reviews[id];
        updatedReview.firebaseId = id;
        updatedReviews.push(updatedReview);
      }

      return Object.assign({}, state, {
        // sort by time of review
        reviews: updatedReviews,
      });
    default:
      return state;
  }
}
