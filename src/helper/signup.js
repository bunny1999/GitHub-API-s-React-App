import Firebase from "../context/firebase"
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
    Firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userRef)=>{
        return User({
            name:userRef.user.displayName,
            email:userRef.user.emailVerified,
            uid:userRef.user.uid
        })
    }).catch((err)=>{
        toast(err,{type:"error"})
    })
}

export default signup;