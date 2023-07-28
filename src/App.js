import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Services/>
    
    </div>
  );
}

export default App;
