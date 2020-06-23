import { SET_CURRENT_IMAGES } from "../actions/types";
const initialState = {
  currentImages: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_IMAGES:
      let heroes = action.payload;
      let updatedImages = [];

      for (let id in heroes) {
        let updatedImage = heroes[id];
        updatedImage.firebaseId = id;
        updatedImages.push(updatedImage);
      }

      return Object.assign({}, state, {
        currentImages: updatedImages.sort(function (a, b) {
          // Sort by title ASC
          var titleA = a.innerTitle.toUpperCase();
          var titleB = b.innerTitle.toUpperCase();
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
