import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); // Dark overlay
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000; // Ensure it's above everything
`;

export const ModalContent = styled.div`
  background: #1a1a2e; // Dark background for modal content
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 80%;
  max-width: 800px; // Max width for the video player
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; // 16:9 aspect ratio
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
