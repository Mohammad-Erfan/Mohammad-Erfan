import React from 'react';
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

function SkillsShowcase() {
  return (
    <SkillsWrapper id="skills">
      <SectionTitle>My Expertise</SectionTitle>
      <SkillsGrid>
        {skillsData.map(skill => (
          <SkillCard key={skill.id}>
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
