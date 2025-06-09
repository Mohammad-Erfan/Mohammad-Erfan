import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PortfolioWrapper,
  SectionTitle,
  PortfolioGrid as StyledPortfolioGrid, // Rename for clarity
  PortfolioItem as StyledPortfolioItem,
  PortfolioImagePlaceholder,
  PortfolioItemInfo,
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } }
};

// Variants for the grid container to orchestrate stagger
const gridContainerVariants = {
  hidden: { opacity: 0 }, // Can be simple, or also animate if needed
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Time delay between each child animating in
      delayChildren: 0.2,   // Optional delay before children start animating after parent is visible
      ease: "circOut"
    }
  }
};

const itemVariants = { // Variants for individual portfolio items
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "circOut" } }
};

function PortfolioGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const openModal = (videoUrl) => { setSelectedVideoUrl(videoUrl); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setSelectedVideoUrl(''); };


  return (
    <PortfolioWrapper
      as={motion.section}
      id="portfolio"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the section is visible
      variants={sectionVariants}
    >
      <SectionTitle>My Work</SectionTitle>
      <StyledPortfolioGrid // Now a motion component
        as={motion.div}
        variants={gridContainerVariants}
        initial="hidden" // Initial and animate props now on the grid itself
        whileInView="visible" // Trigger when grid is in view (can also be just 'animate' if parent handles whileInView)
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of grid is visible
      >
        {portfolioData.map(item => (
          <StyledPortfolioItem
            key={item.id}
            onClick={() => openModal(item.videoUrl)}
            as={motion.div} // This is already a motion component
            variants={itemVariants} // Children will use these variants, orchestrated by parent
          >
            <PortfolioImagePlaceholder />
            <PortfolioItemInfo>
              <PortfolioItemTitle>{item.title}</PortfolioItemTitle>
              <PortfolioItemDescription>{item.description}</PortfolioItemDescription>
            </PortfolioItemInfo>
          </StyledPortfolioItem>
        ))}
      </StyledPortfolioGrid>
      <Modal isOpen={isModalOpen} onClose={closeModal} videoUrl={selectedVideoUrl} />
    </PortfolioWrapper>
  );
}

export default PortfolioGallery;
