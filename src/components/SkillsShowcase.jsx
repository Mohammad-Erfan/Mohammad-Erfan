import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import {
  SkillsWrapper,
  SectionTitle,
  SkillsGrid,
  SkillCard,
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

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

function SkillsShowcase() {
  return (
    <SkillsWrapper
      as={motion.section}
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <SectionTitle>My Expertise</SectionTitle>
      <SkillsGrid>
        {skillsData.map((skill, index) => ( // Added index for potential stagger
          <SkillCard
            key={skill.id}
            as={motion.div} // Animate each card
            variants={cardVariants}
            // Stagger children if SkillsGrid is a motion component with staggerChildren variant
            // For simplicity here, applying variants directly to cards, will animate together with section or slightly delayed if section has staggerChildren
          >
            <SkillIconPlaceholder>{skill.iconText}</SkillIconPlaceholder>
            <SkillName>{skill.name}</SkillName>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
}

export default SkillsShowcase;
