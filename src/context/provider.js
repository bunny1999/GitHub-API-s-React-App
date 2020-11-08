import React,{useReducer, useEffect} from 'react'
import Firebase from './firebase'
import 'firebase/auth';
import { SIGNIN } from './actions.types';
import { UserReducer } from './reducer';
import { UserContext } from './context';
import { User } from './user';

export default function Provider(props) {
    
    const [state, dispatch] = useReducer(UserReducer, null)

    useEffect(()=>{
        Firebase.auth().onAuthStateChanged(user=>{
            if(user!=null){
                dispatch({
                    type:SIGNIN,
                    payload:User({
                        name:user.displayName,
                        uid:user.uid,
                        email:user.emailVerified,
                    })
                })
            }
        });
    },[])

    return (
        <UserContext.Provider value={{state,dispatch}}>
            {props.children}   
        </UserContext.Provider>
    )
}
