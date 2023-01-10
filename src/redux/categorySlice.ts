import { createSlice } from "@reduxjs/toolkit";

export type Category={
    id:number,
    parent_id:number|null,
    name:string,
    slug:string,
    description:string,
    image:string,
    status:string,
    created_at:string,
    updated_at:string,
}

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
initialState.categories=[{
    id:1,
    parent_id:null,
    name:'string',
    slug:'string',
    description:'string',
    image:'string',
    status:'string',
    created_at:'string',
    updated_at:'string',
}]




createSlice({
    name:'categorySlice',
    initialState,
    reducers:{

    }
})