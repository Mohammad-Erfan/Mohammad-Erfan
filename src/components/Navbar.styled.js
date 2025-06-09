import styled, { css } from 'styled-components';

export const NavWrapper = styled.nav`
  background: #1C1C1C; // Slightly different dark shade for navbar
  padding: 0.8rem 2rem; // More compact padding
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  // box-shadow: 0 1px 3px rgba(0,0,0,0.5); // Softer shadow or border
  border-bottom: 1px solid #333333; // Border for separation
`;

export const NavLogo = styled.a`
  font-size: 1.5rem; // Slightly smaller
  font-weight: 700; // Bold
  color: #F5F5F5;
  text-decoration: none;
  &:hover {
    color: #A095E5; // Use new link hover color
  }
`;

export const MobileIcon = styled.div`
  display: none;
  // font-size: 1.6rem; // Remove if directly sizing SVG via props
  color: #E0E0E0; // SVG will inherit this color
  cursor: pointer;
  line-height: 0; // Helps to align SVGs if they have extra space

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed; // Fixed position for full viewport coverage
    top: 0;
    left: -100%;
    background: rgba(28, 28, 28, 0.98); // Slightly transparent dark background for overlay
    backdrop-filter: blur(5px); // Blur effect for modern UI feel
    transition: left 0.3s ease-in-out;
    padding-top: 0; // Reset padding, content will be centered

    ${({ isOpen }) => isOpen && css`
      left: 0;
    `}
  }
`;

export const NavLinkItem = styled.li`
  margin-left: 1.5rem; // Slightly reduced margin

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1.5rem;
    width: 100%;
    text-align: center;
  }
`;

export const NavLink = styled.a`
  color: #C0C0C0; // Slightly muted link color for navbar
  text-decoration: none;
  font-size: 0.95rem; // Precise font size
  font-weight: 400; // Regular weight
  padding: 0.5rem 0.75rem; // Add some padding for better click targets / hover bg
  border-radius: 4px; // Slight border radius for hover bg
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: #F5F5F5; // Brighter text on hover
    background-color: #333333; // Subtle background highlight on hover
  }

  // Example for an "active" link style (if we implement scrollspy later)
  // &.active {
  //   color: #F5F5F5;
  //   background-color: #4A4A4A;
  // }

  @media (max-width: 768px) {
    font-size: 1.3rem; // Larger for mobile overlay
    padding: 0.75rem 1rem;
    display: block;
    width: 80%;
    margin: 0 auto; // Center the link items
    &:hover {
      background-color: #383838;
    }
  }
`;
