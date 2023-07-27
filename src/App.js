import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter ,
//   Routes,
//   Route,

// } from "react-router-dom";


function App() {

 const[mode, setmode] = useState("light");
 const[alert, setAlert] = useState(null);

 const showAlert = (message, type) =>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  },1500);
 }

 
 
 


 const toggleMode = () =>{
if (mode === 'light'){
  setmode ('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark mode has been enabled", "success")
  // document.title= "TextUtils - DarkMode";

     //like we are going to another website and blinking and showing install this etc.
  // setInterval(() => {
  //   document.title = "TextUtils is a Amazing mode"
  // }, 2000);

  // setInterval(() => {
  //   document.title = "Install TextUtils now"
  // }, 1500);

}
else{
  setmode ('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "success")
  // document.title= "TextUtils - LightMode";
}

 }
  return (
    <>


<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className='container my-3'>



 {/* {Switch was replace by routes}  */}
 {/* <BrowserRouter>
  <Routes>

      <Route path="/about"  element={<About mode={mode}/>}>
          </Route>
        
          <Route path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}>
          </Route>
      
  </Routes>
  </BrowserRouter> */}




  <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
</div>



    </>
  );
}

export default App;
