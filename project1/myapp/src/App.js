import React from "react";
import Home from "./components/Home";
import Login_SignUp from "./Login_SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/login" element={<Login_SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    
  );
}

export default App;
