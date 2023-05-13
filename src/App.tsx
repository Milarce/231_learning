import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Miscellany/Header";
import Footer from "./Components/Miscellany/Footer";
import "./App.css";
import Content from "./Components/Content";
import MenuBar from "./Components/Miscellany/MenuBar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuBar />
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
