import React from 'react';
import { motion } from 'framer-motion';
import { HeroWrapper, HeroTitle, HeroSubtitle, HeroButton as StyledHeroButton } from './HeroSection.styled';

function HeroSection() {
  return (
    <HeroWrapper id="hero">
      <HeroTitle
        as={motion.h1}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
      >
        Your Name Here
      </HeroTitle>
      <HeroSubtitle
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "circOut" }}
      >
        Professional Video Editor & Motion Graphics Artist
      </HeroSubtitle>
      <HeroSubtitle
        as={motion.h2} // Second subtitle also animated
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45, ease: "circOut" }}
      >
        Specializing in DaVinci Resolve, After Effects & Premiere Pro
      </HeroSubtitle>
      <StyledHeroButton
        as={motion.a}
        href="#portfolio"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.7 }}
        whileHover={{ scale: 1.05 }} // Keep hover scale
        whileTap={{ scale: 0.95 }}
        // Removed the infinite 'animate' prop for pulsing
      >
        View My Work
      </StyledHeroButton>
    </HeroWrapper>
  );
}

export default HeroSection;
