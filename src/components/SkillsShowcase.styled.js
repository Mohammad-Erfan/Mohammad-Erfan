import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  padding: 4rem 2rem;
  background: #121212; // Back to main dark background, content will be the panel
  // border-top: 1px solid #282828;
  // border-bottom: 1px solid #282828;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #F5F5F5;
  margin-bottom: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  // Using a fixed number of columns for a more structured "panel" or "toolbar" like feel for skills
  // This might need adjustment based on how many skills there are.
  // For 3 skills, grid-template-columns: repeat(3, 1fr) could work on desktop.
  // Let's keep it responsive but perhaps with a larger minmax or fewer columns.
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem; // Increased gap for more distinct panels
  max-width: 1000px; // Max width for the content area
  margin: 0 auto;
  // background: #1E1E1E; // Optional: if the whole grid should be a panel
  // padding: 2rem; // Optional
  // border-radius: 8px; // Optional
  // border: 1px solid #282828; // Optional
`;

export const SkillCard = styled.div`
  background: #1E1E1E; // Dark panel color for each card
  padding: 2rem 1.5rem; // Adjusted padding
  border-radius: 6px;
  border: 1px solid #282828;
  // box-shadow: none; // No shadow for a flatter UI feel
  transition: background-color 0.2s ease, border-color 0.2s ease;
  text-align: left; // Align text to left for a more "inspector" feel

  &:hover {
    background-color: #242424;
    border-color: #A095E5; // Accent border on hover
  }
`;

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SkillIconPlaceholder = styled.div`
  width: 40px; // Smaller icon placeholder
  height: 40px;
  background: #A095E5; // Accent color for icon background
  border-radius: 4px; // Square-ish icon
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem; // Text for DR, AE, PR
  font-weight: 700;
  color: #121212; // Dark text on accent bg
  font-family: 'Inter', sans-serif;
`;

export const SkillName = styled.h3`
  font-size: 1.2rem; // Slightly larger
  color: #E0E0E0;
  font-weight: 700;
  margin: 0;
`;

export const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: #B0B0B0; // Muted description color
  line-height: 1.6;
  margin: 0;
`;
