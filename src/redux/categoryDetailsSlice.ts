import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryDetails } from "../types";


export type CategoryDetailsStateType = {

    categoryDetails:CategoryDetails[]
}

const initialState: CategoryDetailsStateType = {

    categoryDetails:[],

}


const categoryDetailsSlice =  createSlice({
    name:'categoryDetailsSlice',
    initialState,
    reducers:{
        addCategoryDetails:(state:CategoryDetailsStateType,action:PayloadAction<CategoryDetails>)=>{
            console.log('>>ADD CATEGORY DETAILS',state,action)
            state.categoryDetails.push(action.payload)
        }

    }
})

export default categoryDetailsSlice.reducer

export const {addCategoryDetails} = categoryDetailsSlice.actions