import React, { useState } from 'react';
import Content from './Components/Content';
import Header from './Components/Header';
import Login from './Components/LogIn';
import { GlobalStyles } from './GlobalStyles';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Error from './Components/Error';
import { Offer } from './Components/Offer';


const App = () =>{

  const [logReg, setLogReg] = useState(false)

  return (
    <>
    <Router>
      <GlobalStyles/>
     
      
     
       

      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/offer" element={<Offer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App;
