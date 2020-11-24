import { SIGNIN, SIGNUP, LOGOUT, ADDSEARCH, REMOVESEARCH, ISLOADING, ISDONE } from "./actions.types";
import signin from "../helper/signin";
import signup from "../helper/signup";
import logout from "../helper/logout";

export const UserReducer = (state,action)=>{
    switch(action.type){
        case SIGNIN:
            var user = signin(action.payload)
            return user?user:null
        case SIGNUP:
            var user = signup(action.payload)
            return user?user:null
        case LOGOUT:
            return logout()
        default:
            return state
    }
}

export const LoadingReducer = (state,action) =>{
    switch(action.type){
        case ISLOADING:
            return true;
        case ISDONE:
            return false;
        default:
            return state;
    }
}

export const SearchReducer = (state,action)=>{
    switch(action.type){
        case ADDSEARCH:
            return action.payload;
        case REMOVESEARCH:
            return null;
        default:
            return state;
    }
}