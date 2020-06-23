import { SET_EVENTS, ADD_EVENTS } from "../actions/types";
const initialState = {
  events: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      let events = action.payload;
      let updatedEvents = [];

      for (let event in events) {
        let updatedEvent = events[event];
        updatedEvent.firebaseId = event;

        updatedEvents.push(updatedEvent);
      }

      return Object.assign({}, state, {
        events: [...state.events, ...updatedEvents],
      });
    case ADD_EVENTS:
      return Object.assign({}, state, {
        events: [...state.events, action.payload],
      });
    default:
      return state;
  }
}
