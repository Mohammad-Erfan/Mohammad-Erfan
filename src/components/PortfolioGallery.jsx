import React from 'react';
import {
  PortfolioWrapper,
  SectionTitle,
  PortfolioGrid,
  PortfolioItem,
  PortfolioImagePlaceholder,
  PortfolioItemTitle,
  PortfolioItemDescription
} from './PortfolioGallery.styled';

const portfolioData = [
  { id: 1, title: 'Project Alpha', description: 'A dynamic corporate video showcasing innovation.', imageUrl: '' },
  { id: 2, title: 'Creative Showcase Reel', description: 'A compilation of my best motion graphics work.', imageUrl: '' },
  { id: 3, title: 'Short Film "The Journey"', description: 'Narrative short film edited and color graded.', imageUrl: '' },
  { id: 4, title: 'Music Video "Eclipse"', description: 'High-energy music video with visual effects.', imageUrl: '' },
];

function PortfolioGallery() {
  return (
    <PortfolioWrapper id="portfolio">
      <SectionTitle>My Work</SectionTitle>
      <PortfolioGrid>
        {portfolioData.map(item => (
          <PortfolioItem key={item.id} onClick={() => alert('View ' + item.title + ' (modal later!)')}>
            <PortfolioImagePlaceholder />
            <PortfolioItemTitle>{item.title}</PortfolioItemTitle>
            <PortfolioItemDescription>{item.description}</PortfolioItemDescription>
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </PortfolioWrapper>
  );
}

export default PortfolioGallery;
