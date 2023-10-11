const {createSlice} =require("@reduxjs/toolkit")

const initialState=[];

const selectSlice= createSlice({
    name: 'selected',

    initialState,
        
  

    reducers: {

       ad(state,action){
        state.push(action.payload)
       }
     }
     
 })

export const {ad} = selectSlice.actions
export default selectSlice.reducer





