import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 2rem;
  background: #101020; // Even darker for footer, or same as navbar
  color: #a0a0a0; // Muted text color
  text-align: center;
  font-size: 0.9rem;
`;

export const FooterText = styled.p`
  margin: 0.5rem 0;
`;

export const SocialLinks = styled.div`
  margin-top: 1rem;

  a {
    color: #bb69c9; // Lighter purple for links
    margin: 0 0.75rem;
    font-size: 1.2rem; // Slightly larger for icons if they were text
    transition: color 0.3s ease;

    &:hover {
      color: #9c27b0; // Primary purple on hover
    }
  }
`;
