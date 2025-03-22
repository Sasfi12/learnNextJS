import { createSlice } from "@reduxjs/toolkit"

const counterSlice =  createSlice(
    {
        name: "counter",
        initialState: {
            count : 0 
        },
        reducers: {
            add: (state , action) => {
                ++count 
            },
            sub: (state , action) => {
                --count 
            },
            res: (state , action) => {
                count = 0
            }
        }
    }
)
export const {add , sub , res} = counterSlice.actions
export default counterSlice.reducer 