import './App.css';
import React from "react";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/GoToTop/Footer";
import Contact from "./components/Contact";
import {
  BrowserRouter, 
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App () {



return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route element={<Hero/>} path="/" default/>
          <Route element={<About/>} path="/about"/>
          <Route element={<Contact/>} path="/contact"/>
          <Route element={<Projects/>} path="/projects"/>
          <Route element={<Skills/>} path="/skills"/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App
