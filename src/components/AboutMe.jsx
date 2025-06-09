import React from 'react';
import { AboutWrapper, SectionTitle, AboutContent, AboutText, AboutImagePlaceholder } from './AboutMe.styled';

function AboutMe() {
  return (
    <AboutWrapper id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <AboutImagePlaceholder>Your Image Here</AboutImagePlaceholder>
        <AboutText>
          <p>
            Hello! I'm [Your Name], a passionate and creative video editor with a keen eye for detail and a love for storytelling.
            I bring visions to life through compelling visuals and seamless edits.
          </p>
          <p>
            With expertise in industry-standard software like DaVinci Resolve, Adobe After Effects, and Premiere Pro,
            I handle everything from initial concept to final delivery, ensuring a polished and professional product every time.
            Let's create something amazing together!
          </p>
        </AboutText>
      </AboutContent>
    </AboutWrapper>
  );
}

export default AboutMe;
