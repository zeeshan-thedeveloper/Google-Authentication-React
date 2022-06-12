import React, { useState } from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";

import AuthenticationScreen from './AuthenticationScreen'
import Dashboard from "./Components/Dashboard";
function App(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AuthenticationScreen/>}/>
          <Route path="/Dashoard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
