import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  padding: 4rem 2rem;
  background: #23233b; // A slightly different dark background
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

// Re-using SectionTitle from AboutMe.styled.js by importing it,
// or define a common components file later. For now, let's redefine for simplicity,
// but ideally, we'd have a shared styled component for section titles.
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #9c27b0; // Primary Purple
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Responsive grid
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const SkillCard = styled.div`
  background: #2c003e; // Dark purple card background
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(156, 39, 176, 0.4); // Purple glow on hover
  }
`;

export const SkillIconPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background: #bb69c9; // Lighter purple for icon placeholder
  border-radius: 50%;
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: white;
  // In a real scenario, this would be an <img /> or SVG icon
`;

export const SkillName = styled.h3`
  font-size: 1.5rem;
  color: #e0e0e0; // Light text for skill name
  margin-bottom: 0.5rem;
`;

export const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: #c0c0c0; // Slightly muted text for description
  line-height: 1.6;
`;
