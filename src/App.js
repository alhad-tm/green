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

function App() {
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
    
    </div>
  );
}

export default App;
