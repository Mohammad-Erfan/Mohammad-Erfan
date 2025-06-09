import styled from 'styled-components';

export const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  background: #1a1a2e; // Consistent with global body or slightly different
  text-align: center; // Center the section title

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

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

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem; // Space between text and image
  max-width: 1000px;
  margin: 0 auto; // Center the content container
  text-align: left; // Align text to the left within its container

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center; // Center text on mobile
  }
`;

export const AboutText = styled.div`
  flex: 1; // Takes up available space
  line-height: 1.8;
  font-size: 1.1rem;
  color: #c0c0c0; // Slightly lighter than main text for readability
`;

export const AboutImagePlaceholder = styled.div`
  flex-basis: 300px; // Fixed width for the image placeholder
  height: 300px;
  background: #333; // Placeholder color
  border-radius: 10px; // Slightly rounded corners
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1rem;
  border: 2px dashed #9c27b0; // Purple border

  @media (max-width: 768px) {
    flex-basis: 250px; // Smaller on mobile
    height: 250px;
  }
`;
