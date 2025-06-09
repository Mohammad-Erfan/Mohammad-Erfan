import styled from 'styled-components';

export const HeroWrapper = styled.section`
  min-height: 90vh; // Slightly less than 100vh to ensure it doesn't always cause scroll with new navbar
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212; // Match global dark background
  padding: 2rem;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 4.5rem; // Even larger, more impactful
  color: #F5F5F5;
  margin-bottom: 1rem;
  font-weight: 700; // Bold 'Inter'
  letter-spacing: -1px; // Slightly tighter letter spacing for impact
  // text-transform: uppercase; // Optional: for a specific style

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.3rem;
  color: #B0B0B0; // Slightly muted light grey
  margin-bottom: 0.75rem; // Tighter spacing
  max-width: 600px; // Constrain width for readability
  font-weight: 400; // Regular 'Inter'
  line-height: 1.6;

  &:last-of-type { // More space before the button
      margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const HeroButton = styled.a`
  background: #A095E5; // Using the new link color as primary button color
  color: #121212; // Dark text on light button background for contrast
  padding: 0.9rem 2.2rem; // Slightly adjusted padding
  border-radius: 6px; // Less rounded, more software-like
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700; // Bold text on button
  transition: background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease; // Added border-color transition
  // box-shadow: 0 2px 8px rgba(160, 149, 229, 0.3); // Softer shadow, if any
  border: 1px solid #A095E5; // Border matching background for a more solid feel

  &:hover {
    background: #BEB6F0; // Brighter on hover
    border-color: #BEB6F0;
    color: #121212;
    transform: translateY(-2px); // Slight lift
    // box-shadow: 0 4px 12px rgba(160, 149, 229, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
