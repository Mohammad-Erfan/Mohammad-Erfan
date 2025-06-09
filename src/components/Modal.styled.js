import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.85); // Slightly more opaque, very dark
  backdrop-filter: blur(4px); // Consistent blur effect
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const ModalContent = styled.div`
  background: #1E1E1E; // Dark panel color, matches PortfolioItem
  padding: 1.5rem; // Adjusted padding
  border-radius: 8px; // Consistent rounded corners
  border: 1px solid #333333; // Subtle border
  position: relative;
  width: 85%; // Slightly wider
  max-width: 900px; // Max width for the video player
  box-shadow: 0 8px 25px rgba(0,0,0,0.5); // Refined shadow for depth
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px; // Adjusted for new padding
  right: 12px;
  background: transparent;
  border: none;
  color: #AAAAAA; // Muted color
  font-size: 2rem; // Larger, clearer '×'
  font-weight: 300; // Lighter weight for '×' symbol
  line-height: 1; // Ensure tight line height for the symbol
  padding: 0.25rem; // Small padding for easier click
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #E0E0E0; // Brighter on hover
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; // 16:9 aspect ratio
  height: 0;
  overflow: hidden;
  border-radius: 4px; // Optional: slight rounding for the video iframe area

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
