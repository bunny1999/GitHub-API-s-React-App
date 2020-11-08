import { SIGNIN, SIGNUP, LOGOUT } from "./actions.types";
import signin from "../helper/signin";
import signup from "../helper/signup";
import logout from "../helper/logout";

export const UserReducer = (state,action)=>{
    switch(action.type){
        case SIGNIN:
            return signin(action.payload)
        case SIGNUP:
            return signup(action.payload)
        case LOGOUT:
            return logout()
        default:
            return state
    }
}