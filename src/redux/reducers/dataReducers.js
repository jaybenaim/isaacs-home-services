import { SET_DATA } from "../actions/types";
const initialState = {
  services: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      let services = action.payload;
      let updatedServices = [];

      for (let service in services) {
        let updatedService = services[service];
        updatedService.id = service;

        updatedServices.push(updatedService);
      }

      return Object.assign({}, state, {
        services: updatedServices.sort(function (a, b) {
          var titleA = a.title.toUpperCase();
          var titleB = b.title.toUpperCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          // names must be equal
          return 0;
        }),
      });
    default:
      return state;
  }
}
