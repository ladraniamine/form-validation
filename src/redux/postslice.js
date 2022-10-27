import { createSlice } from "@reduxjs/toolkit";

export const postslice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        getinfo:[
            {
                name:null,
                numbercard:null,
                mm:null,
                yy:null,
                cvc:null
            }
        ]
           
    },

        reducers:{
            shareUser:(state,action)=>{
                state.getinfo[0].name = action.payload.name;
                state.getinfo[0].numbercard = action.payload.numbercard;
                state.getinfo[0].mm = action.payload.mm;
                state.getinfo[0].yy = action.payload.yy;
                state.getinfo[0].cvc = action.payload.cvc;
            },

           
        }
})

export const {shareUser} = postslice.actions

export default postslice.reducer