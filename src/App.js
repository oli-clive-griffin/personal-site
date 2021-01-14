import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav/> */}
        <Home/>
      </Router>
    </div>
  );
}

export default App;

