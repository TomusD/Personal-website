import React from 'react';  
import "./index.css"; 
import Home from "./routes/Home";
import CV from "./routes/CV";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Publications from "./routes/Publications";
import { Route, Routes } from "react-router-dom";

function App() {  
  return (
    <>
    <Routes>
      <Route path="/Personal-website" element = {<Home/>} />
      <Route path="/CV" element = {<CV/>} />
      <Route path="/Contact" element = {<Contact/>} />
      <Route path="/About" element = {<About/>} />
      <Route path="/Publications" element = {<Publications/>} />
    </Routes>
    </>  
  );
}

export default App;
