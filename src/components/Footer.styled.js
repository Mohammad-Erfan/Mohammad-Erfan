import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 1.5rem 2rem;
  background: #121212;
  color: #888888;
  text-align: center;
  font-size: 0.85rem;
  border-top: 1px solid #282828;
`;

export const FooterText = styled.p`
  margin: 0.3rem 0;
  line-height: 1.5;
`;

export const SocialLinks = styled.div`
  margin-bottom: 0.8rem;

  a {
    color: #888888; // Icon inherits this color
    margin: 0 0.75rem; // Adjusted margin for icons
    display: inline-block; // Helps with alignment and hover area
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: #A095E5; // Accent color on hover
      transform: scale(1.1); // Slight scale effect on icon hover
    }

    svg { // Direct styling for svg if needed, though color is inherited
      vertical-align: middle; // Good for aligning icons with text if any
    }
  }
`;
