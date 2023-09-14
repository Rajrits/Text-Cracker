import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar1 from './components/Navbar1';
// import About from './components/About';

import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Link,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
 
  const [theme,setTheme]=useState("th-white")
  const chngTheme = (e)=>{
    setTheme(e.target.className)
    if(e.target.className==="th-red"){
      document.body.style.background = '#b14e4e';
      showAlert("Red theme have been Enabled")
    }
    else if(e.target.className==="th-blue"){
      document.body.style.background = '#1f4884';
      showAlert("Blue theme have been Enabled")
    }
    else if(e.target.className==="th-green"){
      document.body.style.background = '#093e11';
      showAlert("Green theme have been Enabled")
    }
    else if(e.target.className==="th-black"){
      document.body.style.background = '#4b514d';
      showAlert("Dark theme have been Enabled")
    }
  }

  const[alert,setAlert]=useState(null)

  const showAlert = (msg)=>{
      setAlert({
        type: "success",
        alerttext: msg
      })
     setTimeout(() => {
      setAlert(null)
     }, 2000);
    }

  const [mode, setmode] = useState({
    theme: "light",
  });
  document.body.style.backgroundColor = 'light'
  const toggle = () => {
    if (mode.theme === "dark") {
      setmode({
        theme: "light",
      })
      showAlert("Light mode have been Enabled")
      document.body.style.backgroundColor = 'white'

    }
    else {
      setmode({
        theme: "dark",

      })
      showAlert("Dark mode have been Enabled")
   
      document.body.style.backgroundColor = 'rgb(15 24 75)'

    }
  }
 
 
  return (
   
      // <BrowserRouter>
     <>
      <Navbar1 title="Text Cracker" mode={mode} toggle={toggle} theme = {theme} chngTheme={chngTheme}/>
      {/* here while passing the props the first letter of props  */}
       <Alert alert={alert} />
      <div className="container my-3" >
      {/* <Routes> */}
       <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert} theme={theme}/>
        {/* <Route path='/about' element={<About mode={mode} theme ={theme}/>}/> */}
      {/* </Routes> */}
      </div>
      {/* // </BrowserRouter> */}
      </> 
   
  );
}

export default App; 
