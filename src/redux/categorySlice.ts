import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../types";



// const exampleCategory:Category={
//     id:1,
//     parent_id:10,
//     name:'11'
// }

export type CategoryState={
    categories:Category[],
    initialized:boolean
}

const initialState:CategoryState={
    categories:[],
    initialized: false

}
// initialState.categories=[{
//     id:1,
//     parent_id:null,
//     name:'string',
//     slug:'string',
//     description:'string',
//     image:'string',
//     status:'string',
//     created_at:'string',
//     updated_at:'string',
// }]




const categorySlice = createSlice({
    name:'categorySlice',
    initialState,
    reducers:{
        setCategories:(state:CategoryState,action:PayloadAction<Category[]>)=>{
            state.categories=action.payload
            state.initialized=true

        },
        clearCategories:(state:CategoryState)=>{
            state.categories=[]
            state.initialized=false
        }
     }
})

export const {setCategories,clearCategories}=categorySlice.actions
export default categorySlice.reducer