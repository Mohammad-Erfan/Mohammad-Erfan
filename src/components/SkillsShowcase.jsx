import React from 'react';
import { motion } from 'framer-motion';
import {
  SkillsWrapper,
  SectionTitle,
  SkillsGrid as StyledSkillsGrid, // Rename for clarity
  SkillCard as StyledSkillCard,
  SkillHeader,
  SkillIconPlaceholder,
  SkillName,
  SkillDescription
} from './SkillsShowcase.styled';

const skillsData = [
  {
    id: 1,
    name: 'DaVinci Resolve',
    iconText: 'DR',
    description: 'Professional color grading, non-linear video editing, and audio post-production.'
  },
  {
    id: 2,
    name: 'Adobe After Effects',
    iconText: 'AE',
    description: 'Motion graphics, visual effects, and compositing for film, TV, and web.'
  },
  {
    id: 3,
    name: 'Adobe Premiere Pro',
    iconText: 'PR',
    description: 'Industry-standard video editing software for creating stunning video content.'
  }
];

// Consistent animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } }
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2, ease: "circOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "circOut" } }
};


function SkillsShowcase() {
  return (
    <SkillsWrapper
      as={motion.section}
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <SectionTitle>My Expertise</SectionTitle>
      <StyledSkillsGrid // Now a motion component
        as={motion.div}
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map(skill => (
          <StyledSkillCard
            key={skill.id}
            as={motion.div} // Already a motion component
            variants={cardVariants}
          >
            <SkillHeader>
              <SkillIconPlaceholder>{skill.iconText}</SkillIconPlaceholder>
              <SkillName>{skill.name}</SkillName>
            </SkillHeader>
            <SkillDescription>{skill.description}</SkillDescription>
          </StyledSkillCard>
        ))}
      </StyledSkillsGrid>
    </SkillsWrapper>
  );
}

export default SkillsShowcase;
