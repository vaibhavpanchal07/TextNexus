import "./App.css";
import Navbar from "./componants/Navbar"
import Textbox from './componants/Textbox';
import { useState } from "react";
import Contact from "./componants/Contact";
import About from "./componants/About";
import Footer from "./componants/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [icon, setIcon] = useState("moon");
  const [input, setInput] = useState("light-input");

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      setIcon("sun");
      document.body.style.color = "#fff";
      document.body.style.backgroundColor = "#192734";
      document.querySelector(".fa-solid").style.color = "#fff";
      document.querySelector(".fa-solid").style.borderColor = "#fff";
      setInput("dark-input");
      document.querySelector("input").style.backgroundColor = "#192734"
      document.querySelector("input").style.color = "#fff"
    }
    else {
      setMode("light");
      setIcon("moon");
      document.body.style.color = "#192734";
      document.body.style.backgroundColor = "#fff";
      document.querySelector(".fa-solid").style.color = "#2b2b2b";
      document.querySelector(".fa-solid").style.borderColor = "#2b2b2b";
      setInput("light-input")
      document.querySelector("input").style.backgroundColor = "#fff";
      document.querySelector("input").style.color = "#192734";
    }

  }
  return (
    <>
      <Router>
        <Navbar mode={mode} icon={icon} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<Textbox heading="Enter text to analyze" mode={mode} input={input} />}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact input={input} />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
