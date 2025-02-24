import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./Pages/login";
import Home from "./Pages/home";

function App() {
  axios.defaults.baseURL = "https://misbackend-e078.onrender.com/";

  return (
    <>
      <Router>
      <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
