import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import { HeroWrapper, HeroTitle, HeroSubtitle, HeroButton as StyledHeroButton } from './HeroSection.styled'; // Rename imported HeroButton

function HeroSection() {
  return (
    <HeroWrapper id="hero">
      <HeroTitle
        as={motion.h1} // Optional: Animate title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Your Name Here
      </HeroTitle>
      <HeroSubtitle
        as={motion.h2} // Optional: Animate subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Professional Video Editor & Motion Graphics Artist
      </HeroSubtitle>
      <HeroSubtitle
        as={motion.h2} // Optional: Animate second subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Specializing in DaVinci Resolve, After Effects & Premiere Pro
      </HeroSubtitle>
      <StyledHeroButton // Use the original styled component
        as={motion.a} // Render it as a motion component
        href="#portfolio"
        whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(156, 39, 176, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }} // For hover/tap
        // Adding a subtle infinite animation for attention
        animate={{
          scale: [1, 1.03, 1], // Pulse effect
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 // Start after initial hero text animations
          }
        }}
      >
        View My Work
      </StyledHeroButton>
    </HeroWrapper>
  );
}

export default HeroSection;
