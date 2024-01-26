import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./slices/userSlice";

export default configureStore({reducer: {user:rootReducer}})