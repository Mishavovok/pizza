import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSilce"

export const store = configureStore({
    reducer: {
        filter,
    },
});