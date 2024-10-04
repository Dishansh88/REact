import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Page1 from './component/page1';
import Page2 from './component/Page2';
function App() {
  const [gvalue,setvalue]=useState(false)
  const settoggle=()=>
  {
    setvalue((prev)=>!prev)
  }
  return (
     <>
      {gvalue?<Page2/>:<Page1 toggle={settoggle}/>}
    
     </>
  );
}

export default App;
