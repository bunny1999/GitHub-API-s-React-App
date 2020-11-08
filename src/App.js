import React,{useContext,useEffect} from 'react'
import Base from './components/base';
import { UserContext } from './context/context';
import { Redirect } from 'react-router-dom';

function App(props) {
  
  const {state} = useContext(UserContext)

  useEffect(() => {
    // if(state!==null){
      return <Redirect to="/signin" />
    // }
  },[])
  
  return (
    <Base>
      <h3>Home</h3>
    </Base>
  );
}

export default App;
