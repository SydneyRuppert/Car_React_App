import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Full Name",
        email: "Email",
        phone_number: "Phone Number",
        address: "Address",
        car_make:"Make",
        car_model:"Model",
        car_year:"Year",
        uid: ""
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        choosePhone: (state, action) => { state.phone_number = action.payload},
        chooseAddress: (state, action) => { state.address = action.payload},
        chooseMake: (state, action) => { state.car_make = action.payload},
        chooseModel: (state, action) => { state.car_model = action.payload},
        chooseYear: (state, action) => { state.car_year = action.payload},
        chooseUID:(state, action) => {state.uid = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, choosePhone, chooseAddress, chooseMake, chooseModel, chooseYear, chooseUID} = rootSlice.actions