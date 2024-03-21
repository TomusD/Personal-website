import React from 'react';  
import "./index.css"; 
import Home from "./routes/Home";
import DataViz from "./routes/DataViz";
import Credits from "./routes/Credits";
import Contact from "./routes/Contact";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";

function App() {  
  return (
    <>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/DataViz" element = {<DataViz/>} />
      <Route path="/Credits" element = {<Credits/>} />
      <Route path="/Contact" element = {<Contact/>} />
      <Route path="/About" element = {<About/>} />
    </Routes>
    </>  
  );
}

export default App;
