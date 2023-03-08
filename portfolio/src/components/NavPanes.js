import React from 'react'
import Contact from "./Contact";
import Experience from './Experience';
import Skills from './Skills';
import Projects from "./Projects";

const NavPanes = () => {
  return (
    <div>
        <Contact/>
        <Experience/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default NavPanes