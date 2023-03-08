import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './GoToTop/hooks';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import Burger from './Burger/Burger';
import BurgerMenu from './Burger/BurgerMenu';
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'

import FocusLock from 'react-focus-lock';

export default function Nav(){
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));



  return(
      <div>
        <nav>
        <a href="https://github.com/rachel-l-sanchez?tab=repositories"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/sanchezrachel1/"><AiOutlineLinkedin/></a>
        </nav>
          <div className="navigation">
            <ThemeProvider theme={theme}>
          
            <>
            <GlobalStyles />
            <div ref={node}>
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <BurgerMenu open={open} setOpen={setOpen} id={menuId}  />
              </FocusLock>
            </div>
            
            </>
            </ThemeProvider>
          </div>
      </div>
  )

}

   

