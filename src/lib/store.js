import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../lib/features/counter/counterSlice"
export const store = configureStore ({
    reducer : {
        counter : counterReducer
    }
});