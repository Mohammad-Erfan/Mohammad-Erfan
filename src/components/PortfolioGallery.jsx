import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import {
  PortfolioWrapper,
  SectionTitle,
  PortfolioGrid,
  PortfolioItem,
  PortfolioImagePlaceholder,
  PortfolioItemTitle,
  PortfolioItemDescription
} from './PortfolioGallery.styled';
import Modal from './Modal';

const portfolioData = [
  { id: 1, title: 'Project Alpha', description: 'A dynamic corporate video showcasing innovation.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, title: 'Creative Showcase Reel', description: 'A compilation of my best motion graphics work.', videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso' },
  { id: 3, title: 'Short Film "The Journey"', description: 'Narrative short film edited and color graded.', videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A' },
  { id: 4, title: 'Music Video "Eclipse"', description: 'High-energy music video with visual effects.', videoUrl: 'https://www.youtube.com/embed/2Vv-BfVoq4g' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Variants for individual portfolio items (optional, could be simpler)
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function PortfolioGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const openModal = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoUrl(''); // Clear URL when closing
  };

  return (
    <PortfolioWrapper
      as={motion.section}
      id="portfolio"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <SectionTitle>My Work</SectionTitle>
      <PortfolioGrid> {/* For stagger, this could be motion.div */}
        {portfolioData.map(item => (
          <PortfolioItem
            key={item.id}
            onClick={() => openModal(item.videoUrl)}
            as={motion.div} // Animate each portfolio item
            variants={itemVariants} // These will animate when the parent (PortfolioWrapper) becomes 'visible'
                                    // or slightly after if stagger is applied to PortfolioGrid.
          >
            <PortfolioImagePlaceholder />
            <PortfolioItemTitle>{item.title}</PortfolioItemTitle>
            <PortfolioItemDescription>{item.description}</PortfolioItemDescription>
          </PortfolioItem>
        ))}
      </PortfolioGrid>
      <Modal isOpen={isModalOpen} onClose={closeModal} videoUrl={selectedVideoUrl} />
    </PortfolioWrapper>
  );
}

export default PortfolioGallery;
