import React, { useState } from 'react'; // Import useState
import { NavWrapper, NavLogo, NavLinks, NavLinkItem, NavLink, MobileIcon } from './Navbar.styled'; // Import MobileIcon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Initialize isOpen state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu, can be used by NavLink clicks
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavWrapper>
      <NavLogo href="#" onClick={isOpen ? closeMenu : null}>Your Name/Logo</NavLogo>
      <MobileIcon onClick={toggleMenu}>
        {isOpen ? <>&times;</> : <>&#9776;</>} {/* Simple text icons: X and Burger */}
      </MobileIcon>
      <NavLinks isOpen={isOpen}> {/* Pass isOpen prop */}
        <NavLinkItem><NavLink href="#about" onClick={closeMenu}>About</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#skills" onClick={closeMenu}>Skills</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#portfolio" onClick={closeMenu}>Portfolio</NavLink></NavLinkItem>
        <NavLinkItem><NavLink href="#contact" onClick={closeMenu}>Contact</NavLink></NavLinkItem>
      </NavLinks>
    </NavWrapper>
  );
}

export default Navbar;
