import styled, { css } from 'styled-components'; // Import css

export const NavWrapper = styled.nav`
  background: #2c003e;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

export const NavLogo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: #e0e0e0;
  text-decoration: none;
  &:hover {
    color: #bb69c9;
  }
`;

// Styles for the mobile menu icon (burger)
export const MobileIcon = styled.div`
  display: none; // Hidden by default, shown on mobile
  font-size: 1.8rem;
  color: #e0e0e0;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // Show on mobile
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center; // Align items for desktop view
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: flex; // Use flex for column layout
    flex-direction: column;
    align-items: center; // Center items in the overlay
    justify-content: center; // Center items vertically
    width: 100%;
    height: 100vh; // Full screen overlay
    position: absolute;
    top: 0; // Position from the top of NavWrapper (or viewport if fixed)
    left: -100%; // Start off-screen
    background: #2c003e; // Same as navbar or slightly more opaque
    transition: left 0.3s ease-in-out; // Smooth transition for sliding in/out
    padding-top: 3.5rem; // Add padding to avoid overlap with status bar or notch

    // Conditional styling based on 'isOpen' prop
    ${({ isOpen }) => isOpen && css`
      left: 0; // Slide in when open
    `}
  }
`;

export const NavLinkItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 2rem; // Space out links vertically in mobile menu
    width: 100%;
    text-align: center;
  }
`;

export const NavLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1rem; // Base font size
  transition: color 0.3s ease;

  &:hover {
    color: #bb69c9;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; // Larger font size for mobile menu links
    display: block; // Make the whole area clickable
    padding: 0.5rem 0; // Add some padding
  }
`;
