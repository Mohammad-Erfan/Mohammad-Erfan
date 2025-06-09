import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import { AboutWrapper, SectionTitle, AboutContent, AboutText, AboutImagePlaceholder } from './AboutMe.styled';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function AboutMe() {
  return (
    <AboutWrapper
      as={motion.section} // Use 'as' prop to render AboutWrapper as a motion component
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is in view
      variants={sectionVariants}
    >
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
