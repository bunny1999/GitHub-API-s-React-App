import Firebase from "../context/firebase"
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
    Firebase.auth().signInWithEmailAndPassword(email,password)
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
export default signin;