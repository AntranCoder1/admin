import React from 'react';
import './app.css';
import SideBar from './components/sideBar/SideBar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
