import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/Signup";
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
