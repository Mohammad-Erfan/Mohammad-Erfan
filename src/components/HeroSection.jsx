import React from 'react';
import { HeroWrapper, HeroTitle, HeroSubtitle, HeroButton } from './HeroSection.styled';

function HeroSection() {
  return (
    <HeroWrapper id="hero"> {/* Added id for potential anchor link */}
      <HeroTitle>Your Name Here</HeroTitle>
      <HeroSubtitle>Professional Video Editor & Motion Graphics Artist</HeroSubtitle>
      <HeroSubtitle>Specializing in DaVinci Resolve, After Effects & Premiere Pro</HeroSubtitle>
      <HeroButton href="#portfolio">View My Work</HeroButton>
    </HeroWrapper>
  );
}

export default HeroSection;
