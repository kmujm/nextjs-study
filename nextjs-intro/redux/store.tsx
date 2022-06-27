import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"

import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

export default configureStore({
  reducer: {
    auth: userReducer,
  },
});
