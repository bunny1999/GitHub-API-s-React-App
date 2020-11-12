import React, { useEffect,useContext } from 'react'
import Base from '../components/base'
import { UserContext } from '../context/context'
import { SIGNUP } from '../context/actions.types'
import { Redirect} from 'react-router-dom'

const Signup=()=>{
    
    const {stateUser,dispatchUser} = useContext(UserContext)

    const redirect=()=>{
        return <Redirect to="/"/> 
    }

    useEffect(() => {
        redirect();
        if(stateUser!==null){
        }
        dispatchUser({
          type:SIGNUP,
          payload:{
              email:"abc@gmail.com",
              password:"99110022"
          }  
        })
        redirect();
    }, [])
    
    return (
        <Base>
            <h3>Signup</h3>            
        </Base>
    )
}

export default Signup;