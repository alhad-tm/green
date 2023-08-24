import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Poster from './Components/Poster/Poster';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Why from './Components/Why/Why';

import Backto from "../src/assets/backtotopnew.svg"
import { useState } from 'react';

function App() {

  const [state,setState]=useState(false)

  const backTo=()=>{
    
  if (window.scrollY>100){
    setState(true)
  } else{
    setState(false)
  }

  }

  window.addEventListener("scroll",backTo)

  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Services/> 
      <Why/>
      <Poster/>
     
      <Contact/>
      <Footer/>

      <img  className= { state? "tobtn2":" tobtn"} src={Backto}></img>
    
    </div>
  );
}

export default App;
