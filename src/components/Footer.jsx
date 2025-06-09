import React from 'react';
import { FooterWrapper, FooterText, SocialLinks } from './Footer.styled';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <SocialLinks>
        {/* Placeholder for social icons - replace with actual icons later */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LI</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IN</a>
        <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">VM</a>
      </SocialLinks>
      <FooterText>
        &copy; {currentYear} Your Name Here. All Rights Reserved.
      </FooterText>
      <FooterText>
        Built with React & Styled-Components.
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
