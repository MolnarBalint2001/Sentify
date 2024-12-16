import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type ModelState = {

    activeModel:string

}

const initialState:ModelState = {
    activeModel:"mini",
}



export const modelSlice = createSlice({
    name:"model",
    initialState,
    reducers:{
        setActiveModel(state, {payload}:PayloadAction<string>){
            state.activeModel = payload;
        }
    }
});



export const {setActiveModel } = modelSlice.actions

export const modelReducer =  modelSlice.reducer



