import React, { useState } from 'react';
import { Menu, X } from 'react-feather'; // Import Menu and X icons
import { NavWrapper, NavLogo, NavLinks, NavLinkItem, NavLink, MobileIcon } from './Navbar.styled';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavWrapper>
      <NavLogo href="#" onClick={isOpen ? closeMenu : undefined}>Your Name/Logo</NavLogo>
      <MobileIcon onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Use Feather icons, adjust size */}
      </MobileIcon>
      <NavLinks isOpen={isOpen}>
        <NavLinkItem><NavLink href="#about" onClick={closeMenu}>About</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#skills" onClick={closeMenu}>Skills</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#portfolio" onClick={closeMenu}>Portfolio</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#contact" onClick={closeMenu}>Contact</NavLink></NavLinkItem>
      </NavLinks>
    </NavWrapper>
  );
}

export default Navbar;
