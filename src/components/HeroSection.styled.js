import styled from 'styled-components';

export const HeroWrapper = styled.section`
  min-height: 100vh; // Full viewport height
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1f1f38; // A slightly different dark shade, can be an image/gradient later
  padding: 2rem;
  text-align: center;
  position: relative; // For potential pseudo-elements or overlays
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem; // Large, impactful title
  color: #e0e0e0; // Override global purple for main hero title for impact, or use a vibrant purple
  margin-bottom: 1rem;
  font-weight: bold;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #bb69c9; // Primary purple for subtitle
  margin-bottom: 2rem;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroButton = styled.a`
  background: #9c27b0; // Primary purple
  color: white;
  padding: 0.8rem 2.5rem;
  border-radius: 50px; // Pill shape
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(156, 39, 176, 0.4);

  &:hover {
    background: #7b1fa2; // Darker purple on hover
    transform: translateY(-3px);
  }
`;
