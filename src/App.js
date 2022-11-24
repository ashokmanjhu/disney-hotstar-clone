import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
