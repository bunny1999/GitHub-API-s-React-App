import React,{useReducer, useEffect} from 'react'
import { ADDSEARCH, ISLOADING } from '../context/actions.types'
import { apisUser } from '../helper/search'
import 'firebase/auth';
import { SIGNIN } from './actions.types';
import { UserReducer, SearchReducer, LoadingReducer } from './reducer';
import { UserContext, SearchContext, LoadingContext } from './context';

export default function Provider(props) {
    
    const [stateUser, dispatchUser] = useReducer(UserReducer, null)
    const [stateSearch, dispatchSearch] = useReducer(SearchReducer, null)
    const [stateLoading,dispatchLoading] = useReducer(LoadingReducer,false)

    useEffect(async ()=>{
        if(localStorage.getItem("auth")){
            dispatchUser({
                type:SIGNIN,
                payload:JSON.parse(localStorage.getItem("auth"))
            })
        }
        if(localStorage.getItem("search")){
            const user=JSON.parse(localStorage.getItem("search"));
            if(typeof(user)!=="string"){
                return;
            }
            await apisUser({
                username:JSON.parse(localStorage.getItem("search"))
            }).then((data)=>{
                dispatchLoading({
                    type:ISLOADING
                })
                dispatchSearch({
                    type:ADDSEARCH,
                    payload:data
                });
            })
        }
    },[])

    return (
        <LoadingContext.Provider value={{stateLoading,dispatchLoading}}>
            <UserContext.Provider value={{stateUser,dispatchUser}}>
                <SearchContext.Provider value={{stateSearch,dispatchSearch}}>
                    {props.children}   
                </SearchContext.Provider>
            </UserContext.Provider>
        </LoadingContext.Provider>
    )
}
