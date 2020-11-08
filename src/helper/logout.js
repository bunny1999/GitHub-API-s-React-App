import Firebase from "../context/firebase"

const logout = ()=>{
    Firebase.auth().signOut();
    return null;
}

export default logout;