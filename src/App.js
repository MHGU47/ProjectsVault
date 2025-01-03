import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlamSegment from './components/GlamSegment';
import SidePanel from './components/SidePanel';
import logo from './images/ngs_arks_logo.png'
import Main from './components/Main';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      testing 212
      {/* <Navbar/> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NGS Looksbook Collection (Totally not an Eorzea Collection clone...)
        </p>
      </header>
      <main className="main">
        <div className="main_main">
          <Hero/>
          <GlamSegment/>
        </div>
        <div className="main_side">
          <SidePanel/>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
