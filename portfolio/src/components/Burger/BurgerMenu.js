import React from 'react';
import { bool } from 'prop-types';
import {
    MainContainer,
    Container,
    BarChartContainer,
    Number,
    BlackLine,
    MakeBar, StyledBurger, StyledMenu
  } from "../../styles";
const BurgerMenu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🏠</span>
        Home
      </a>
      <a href="/about" tabIndex={tabIndex}>
        <span aria-hidden="true">💁‍♀️</span>
        About Me
      </a>
        <a href="/projects" tabIndex={tabIndex}>
        <span aria-hidden="true">💻</span>
        Projects
        </a>
      <a href="/contact" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
        Contact Me
        </a>
       
    </StyledMenu>
  )
}

BurgerMenu.propTypes = {
  open: bool.isRequired,
}

export default BurgerMenu;