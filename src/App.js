import React from "react";
import "./App.css";
import Home from "./Container/Home";
import Signup from "./Container/Signup";
import Login from './Container/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() { 
  return ( 
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
  }

export default App;
