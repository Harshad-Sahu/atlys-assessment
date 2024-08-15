import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;
