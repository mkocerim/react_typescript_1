import { configureStore } from "@reduxjs/toolkit";
import categoryDetailsReducer from "./categoryDetailsSlice";

import categoryReducer from "./categorySlice";


const store = configureStore({

  reducer: {
    category: categoryReducer,
    categoryDetails: categoryDetailsReducer
  },
});

const state = store.getState()

// state degiskenimizin degeri tam olarak bu olacaktir
// state= {
//   category:{
//     categories:[],
//     initialized:false
//   }
// }

export type RootState = typeof state

export default store