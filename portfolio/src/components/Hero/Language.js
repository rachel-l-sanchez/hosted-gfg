import React from 'react'
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import './circle.css';


const Language = () => {
  
  
  return (
    <section>
      <div id="text-container">

            <h1 className="box">
              <span id="text-span" className="word1">React.JS</span>
              <span id="text-span" className="word2">CSS</span>
              <span id="text-span" className="word3">Java</span>
              <span id="text-span" className="word4">HTML</span>
              <span id="text-span"  className="word5">Python</span>
          </h1>
        </div>
    </section>
  )
}

export default Language;