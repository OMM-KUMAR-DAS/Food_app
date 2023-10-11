import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from "./tokenSlice";

import timeReducer from "./timeSlice"

import selectReducer from "./selectSlice"


const store= configureStore({
    
    reducer:{
        
        tok:tokenReducer,
        time:timeReducer,
        selected:selectReducer,
        
       
    },
})


export default store;


