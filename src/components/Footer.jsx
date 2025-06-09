import React from 'react';
// Importing icons from react-feather
import { Linkedin, Instagram, Youtube as VimeoIconPlaceholder } from 'react-feather';
// Using Youtube icon as a stand-in for Vimeo since react-feather might not have Vimeo directly.
// Alternatively, one might search for a more generic 'video' icon or use a different library for Vimeo.
import { FooterWrapper, FooterText, SocialLinks } from './Footer.styled';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <SocialLinks>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={20} /> {/* Adjust size as needed */}
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
          <VimeoIconPlaceholder size={20} /> {/* Placeholder icon */}
        </a>
      </SocialLinks>
      <FooterText>
        &copy; {currentYear} Your Name Here. All Rights Reserved.
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
