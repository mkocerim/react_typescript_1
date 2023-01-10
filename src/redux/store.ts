import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./categorySlice";


const store = configureStore({

  reducer: {
    category:categoryReducer
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