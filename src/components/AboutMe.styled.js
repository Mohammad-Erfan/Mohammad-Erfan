import styled from 'styled-components';

export const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  background: #181818; // Slightly off-black for a subtle panel feel for the whole section
  // border-top: 1px solid #282828; // Optional separator from hero
  // border-bottom: 1px solid #282828; // Optional separator to next section

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #F5F5F5;
  margin-bottom: 3.5rem; // More space after title
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: flex-start; // Align items to the top
  justify-content: center;
  gap: 3rem;
  max-width: 1100px; // Slightly wider
  margin: 0 auto;
  background: #1E1E1E; // Inner panel color, distinct from wrapper
  padding: 2.5rem; // Padding for the inner panel
  border-radius: 8px; // Rounded corners for the panel
  border: 1px solid #282828;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; // Center items in column layout
    gap: 2rem;
    padding: 2rem;
  }
`;

export const AboutText = styled.div`
  flex: 1;
  line-height: 1.7; // Increased line height for readability
  font-size: 1rem; // Standard text size
  color: #D0D0D0; // Slightly softer than pure white

  p {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AboutImagePlaceholder = styled.div`
  flex-basis: 320px; // Slightly larger fixed width
  height: 320px; // Maintain square or adjust as needed
  background: #282828; // Dark placeholder background
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  border: 1px dashed #444; // Dashed border for placeholder feel

  @media (max-width: 768px) {
    flex-basis: 280px;
    height: 280px;
    width: 100%; // Make it full width of its container on mobile
  }
`;
