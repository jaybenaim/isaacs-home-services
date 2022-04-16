import { SET_CURRENT_IMAGES } from "../actions/types";
const initialState = {
  currentImages: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_IMAGES:
      let heroes = action.payload;
      let updatedImages = [];

      console.log("heros", heroes);

      // if (heroes[0]) {
      //   // mongo
      //   updatedImages = heroes;
      // } else {
      //   // firebase
      //   for (let id in heroes) {
      //     let updatedImage = heroes[id];
      //     updatedImage.firebaseId = id;
      //     updatedImages.push(updatedImage);
      //   }
      // }

      // for (let id in heroes) {
      //   // If mongo data
      //   const hero = id;
      //   if (hero._id) {
      //     let updatedImage = hero;
      //     updatedImage.firebaseId = hero._id;
      //     updatedImages.push(updatedImage);
      //   } else {
      //     let updatedImage = heroes[id];
      //     updatedImage.firebaseId = id;
      //     updatedImages.push(updatedImage);
      //   }
      // }

      return Object.assign({}, state, {
        currentImages: heroes.sort(function (a, b) {
          // Sort by title ASC
          const titleA = a.innerTitle.toUpperCase();
          const titleB = b.innerTitle.toUpperCase();

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
