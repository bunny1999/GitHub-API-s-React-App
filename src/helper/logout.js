import {auth} from "../context/firebase"

const logout = ()=>{
    auth.signOut();
    localStorage.removeItem("auth");
    return null;
}

export default logout;