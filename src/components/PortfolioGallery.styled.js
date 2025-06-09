import styled from 'styled-components';

export const PortfolioWrapper = styled.section`
  padding: 4rem 2rem;
  background: #121212; // Global dark background
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem; // Consistent with other section titles if we define one
  color: #F5F5F5;
  margin-bottom: 3rem;
  text-transform: uppercase; // Optional, for stylistic choice
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); // Slightly larger min size
  gap: 1.5rem; // Slightly reduced gap
  max-width: 1400px; // Allow wider grid
  margin: 0 auto;
`;

export const PortfolioItem = styled.div`
  background: #1E1E1E; // Dark panel color
  border-radius: 6px; // Software-like border radius
  overflow: hidden;
  // box-shadow: 0 2px 5px rgba(0,0,0,0.3); // Softer shadow or remove
  border: 1px solid #282828; // Subtle border for definition
  transition: border-color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #A095E5; // Accent border on hover
    background-color: #242424; // Slightly lighter background on hover
    // transform: none; // Remove previous transform if it doesn't fit
    // box-shadow: none; // Remove hover shadow if relying on border
  }
`;

export const PortfolioImagePlaceholder = styled.div`
  width: 100%;
  padding-top: 56.25%; // 16:9 aspect ratio
  background: #282828; // Darker placeholder background
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #282828; // Separator if title is outside

  &::after {
    content: 'Load Video Thumbnail...'; // More software-like text
    color: #777; // Muted text color
    font-size: 0.9rem;
    font-family: 'Inter', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PortfolioItemInfo = styled.div`
    padding: 1rem;
`;

export const PortfolioItemTitle = styled.h3`
  font-size: 1.1rem; // Clear but not overly large
  color: #E0E0E0;
  font-weight: 700; // Bold 'Inter'
  margin: 0 0 0.5rem 0; // Adjust spacing
  // background: none; // Remove previous background if any
  text-align: left;
`;

export const PortfolioItemDescription = styled.p`
  font-size: 0.85rem;
  color: #AAAAAA; // Lighter grey for description
  line-height: 1.5;
  text-align: left;
  margin: 0;
`;
