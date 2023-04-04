import React from "react";
import Header from "./Components/Miscellany/Header";
import Footer from "./Components/Miscellany/Footer";
import "./App.css";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
