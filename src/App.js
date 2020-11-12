import React,{useContext,useEffect} from 'react'
import Base from './components/base';
import { UserContext } from './context/context';
import { Redirect } from 'react-router-dom';
import Search from './components/search';

function App(props) {
  
  const {stateUser} = useContext(UserContext)

  useEffect(() => {
    // if(state!==null){
      return <Redirect to="/signin" />
    // }
  },[])
  
  return (
    <Base>
      <Search/>
    </Base>
  );
}

export default App;
