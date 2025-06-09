import React from 'react';
import { motion } from 'framer-motion';
import { AboutWrapper, SectionTitle, AboutContent, AboutText, AboutImagePlaceholder } from './AboutMe.styled';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 }, // Matched to PortfolioGallery's subtlety
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } }
};

// Optional: Variants for inner content if needed
// const contentVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.2, ease: "easeOut" } }
// };

function AboutMe() {
  return (
    <AboutWrapper
      as={motion.section}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} // Adjust viewport amount if needed
      variants={sectionVariants}
    >
      <SectionTitle>About Me</SectionTitle>
      <AboutContent
        // Optional: animate the panel itself after section wrapper is in view
        // as={motion.div}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.5 }}
        // variants={contentVariants}
      >
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
