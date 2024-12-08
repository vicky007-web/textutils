
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from "./Components/About";
import React,{useState} from 'react';

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
    setAlert(null);
    },1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')

  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled","success")
      // document.title = 'TextUtils - DarkMode '
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // },2000 );

      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // },1500);
    } else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success")
    }
  }
  return (    
    <>
    {/* <Navbar title= "TextUtils" aboutText= "about TextUtils"/> */}
    
    <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className= "container my-3"> 
     <TextForm showAlert={showAlert} heading= "Enter The Text To Analyze below" mode={mode}/>
     </div>
   

    
</>
  );
}


export default App;
