import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        first: "Full Name",
        email: "Email",
        phone_number: "Phone Number",
        address: "Address",
        car_make:"Make",
        car_model:"Model",
        car_year:"Year"
    },
    reducers: {
        chooseFirst: (state, action) => { state.first = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        choosePhone: (state, action) => { state.phone_number = action.payload},
        chooseAddress: (state, action) => { state.address = action.payload},
        chooseMake: (state, action) => { state.car_make = action.payload},
        chooseModel: (state, action) => { state.car_model = action.payload},
        chooseYear: (state, action) => { state.car_year = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseFirst, chooseEmail, choosePhone, chooseAddress, chooseMake, chooseModel, chooseYear} = rootSlice.actions