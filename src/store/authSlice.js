import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null,
}


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{ //y ek object hai 
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;//actions loginn  and logout
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }

    }
})
export const {login,logout}=authSlice.actions;

export default authSlice.reducer;