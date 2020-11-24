import {auth} from "../context/firebase"
import { toast } from "react-toastify";
import { User } from "../context/user";

const signin = ({email,password})=>{
    if(email==="" || !email){
        toast("Enter Email",{type:"error"});
        return;
    }
    if(password==="" || !password){
        toast("Enter Password",{type:"error"});
        return;
    }
    auth.signInWithEmailAndPassword(email,password)
    .then((userRef)=>{
        const user = User({
            name:userRef.user.displayName,
            email:userRef.user.emailVerified,
            uid:userRef.user.uid
        })
        localStorage.setItem("auth",user);
        return user;
    }).catch((err)=>{
        toast(err,{type:"error"})
    })
}
export default signin;