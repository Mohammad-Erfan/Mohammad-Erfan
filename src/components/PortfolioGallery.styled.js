import styled from 'styled-components';

export const PortfolioWrapper = styled.section`
  padding: 4rem 2rem;
  background: #1a1a2e; // Consistent background
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

// Re-using SectionTitle style definition
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

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Responsive grid
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PortfolioItem = styled.div`
  background: #2c003e; // Dark purple card background
  border-radius: 10px;
  overflow: hidden; // To contain the image placeholder
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; // Indicate it's clickable (for future modal)

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 25px rgba(156, 39, 176, 0.5); // Enhanced purple glow
  }
`;

export const PortfolioImagePlaceholder = styled.div`
  width: 100%;
  padding-top: 56.25%; // 16:9 aspect ratio
  background: #bb69c9; // Lighter purple for placeholder
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  // Text inside placeholder
  &::after {
    content: 'Video Thumbnail';
    color: white;
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PortfolioItemTitle = styled.h3`
  font-size: 1.3rem;
  color: #e0e0e0;
  padding: 1rem;
  margin: 0;
  background: rgba(0,0,0,0.3); // Slight overlay for text
`;

export const PortfolioItemDescription = styled.p`
  font-size: 0.9rem;
  color: #c0c0c0;
  padding: 0 1rem 1rem 1rem;
  margin: 0;
`;
