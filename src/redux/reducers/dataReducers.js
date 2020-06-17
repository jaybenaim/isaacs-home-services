import { SET_DATA } from "../actions/types";
const initialState = {
  services: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return Object.assign({}, state, {
        services: Array(action.payload),
      });
    default:
      return state;
  }
}
