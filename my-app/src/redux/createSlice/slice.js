import { createSlice } from "@reduxjs/toolkit";

const initialState= {
   currentUser:null,
   loading:false,
   error:false,
}
const UserSlice = createSlice({
   name:"user",
   initialState,
   reducers:{
    SignInStart:(state)=>{
         state.loading = true
    },
    SignInSucess:(state,action) =>{
        state.currentUser = action.payload
        state.loading = false
        state.error = false 
    },
    SignInfail:(state,action)=>{
      state.loading = true,
      state.error = action.payload
    },
    updatestart:(state)=>{
     state.loading = true
    },
    updatesuces:(state,action)=>{
     state.currentUser = action.payload
     state.loading = false
    },
    updatefail:(state,action)=>{
     state.currentUser = action.payload
     state.loading = true
     state.error = true
    },
    deletestart:(state)=>{
     state.loading = true
    },
    deletesuces:(state)=>{
     state.currentUser = null
     state.loading = false
    },
    deletefail:(state,action)=>{
     state.currentUser = action.payload
     state.loading = true
     state.error = true
    },
    Signout:(state)=>{
         state.currentUser =null
     state.loading = true
     state.error = true
    }
   

   }
})

export const {SignInStart,SignInSucess,SignInfail,updatestart,updatesuces,updatefail,deletestart , deletesuces,deletefail ,Signout} = UserSlice.actions 
export default UserSlice.reducer