import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 89
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        reset: (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions

export default counterSlice.reducer