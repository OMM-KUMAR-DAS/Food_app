 const {createSlice} =require("@reduxjs/toolkit")

const initialState=[];

const timeSlice= createSlice({
    name: 'time',

    initialState,
        
  

    reducers: {

       ord(state,action){
        state.push(action.payload)
       },


      

    }
 })

export const {ord} = timeSlice.actions
export default timeSlice.reducer





