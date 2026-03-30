import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from './slice';

export const store = configureStore({
    reducer: reduxSlice,
});