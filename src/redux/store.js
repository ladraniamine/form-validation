import { configureStore } from "@reduxjs/toolkit";
import postslice from "./postslice";


const store = configureStore({
    reducer:{
        posts: postslice,
    }
})

export default store