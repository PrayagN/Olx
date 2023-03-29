import React,{useEffect,useContext} from "react";
import "./App.css";
import Home from "./Container/Home";
import Signup from "./Container/Signup";
import Login from './Container/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./store/Context";

function App() { 
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    console.log(user);
  })
  return ( 
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
  }

export default App;
