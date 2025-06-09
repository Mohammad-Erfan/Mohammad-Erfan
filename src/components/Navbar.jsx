import React from 'react';
import { NavWrapper, NavLogo, NavLinks, NavLinkItem, NavLink } from './Navbar.styled';

function Navbar() {
  return (
    <NavWrapper>
      <NavLogo href="#">Your Name/Logo</NavLogo>
      <NavLinks>
        <NavLinkItem><NavLink href="#about">About</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#skills">Skills</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#portfolio">Portfolio</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#contact">Contact</NavLink></NavLinkItem>
      </NavLinks>
      {/* Basic placeholder for mobile menu icon - functionality later */}
      {/* <div className="mobile-menu-icon">Icon</div> */}
    </NavWrapper>
  );
}

export default Navbar;
