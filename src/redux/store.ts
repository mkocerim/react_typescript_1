import { configureStore } from "@reduxjs/toolkit";




const store = configureStore({

  reducer: {},
});

const state = store.getState()

export type RootState = typeof state

export default store