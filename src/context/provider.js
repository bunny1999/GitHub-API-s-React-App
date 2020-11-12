import React,{useReducer, useEffect} from 'react'
import Firebase from './firebase'
import 'firebase/auth';
import { SIGNIN } from './actions.types';
import { UserReducer, SearchReducer } from './reducer';
import { UserContext, SearchContext } from './context';
import { User } from './user';

export default function Provider(props) {
    
    const [stateUser, dispatchUser] = useReducer(UserReducer, null)
    const [stateSearch, dispatchSearch] = useReducer(SearchReducer, null)

    useEffect(()=>{
        Firebase.auth().onAuthStateChanged(user=>{
            if(user!=null){
                dispatchUser({
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
        <UserContext.Provider value={{stateUser,dispatchUser}}>
            <SearchContext.Provider value={{stateSearch,dispatchSearch}}>
                {props.children}   
            </SearchContext.Provider>
        </UserContext.Provider>
    )
}
