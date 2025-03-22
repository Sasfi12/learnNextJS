import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    count : 0, 
}
const counterSlice =  createSlice(
    {
        name: "counter",
        initialState,
        reducers: {
            add: (state) => {
                state.count += 1  
            },
            sub: (state) => {
                state.count -= 1 
            },
            res: (state) => {
                state.count = 0
            }
        }
    }
)
export const {add , sub , res} = counterSlice.actions
export default counterSlice.reducer 