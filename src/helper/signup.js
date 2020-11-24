import {auth} from "../context/firebase"
import { toast } from "react-toastify";
import { User } from "../context/user";

const signup = ({email,password})=>{
    if(email===""){
        toast("Enter Email",{type:"error"});
        return;
    }
    if(password===""){
        toast("Enter Password",{type:"error"});
        return;
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userRef)=>{
        const user = User({
            name:userRef.user.displayName,
            email:userRef.user.emailVerified,
            uid:userRef.user.uid
        })
        localStorage.setItem("auth",JSON.stringify(user));
        return user;
    }).catch((err)=>{
        toast(err,{type:"error"})
    })
}

export default signup;