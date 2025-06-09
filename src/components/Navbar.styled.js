import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background: #2c003e; // Darker purple, or a gradient
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
  color: #e0e0e0; // White or light color for logo text
  text-decoration: none;

  &:hover {
    color: #bb69c9; // Lighter purple on hover
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    // Basic responsiveness: hide links for now, burger menu later
    display: none;
  }
`;

export const NavLinkItem = styled.li`
  margin-left: 2rem;
`;

export const NavLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #bb69c9; // Lighter purple on hover
  }
`;
