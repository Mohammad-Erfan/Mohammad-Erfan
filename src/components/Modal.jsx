import React from 'react';
import { ModalOverlay, ModalContent, CloseButton, VideoWrapper } from './Modal.styled';

// Placeholder video - replace with actual video source later
const defaultVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Rick Astley as placeholder

function Modal({ isOpen, onClose, videoUrl }) {
  if (!isOpen) {
    return null;
  }

  const currentVideoUrl = videoUrl || defaultVideoUrl;

  return (
    <ModalOverlay onClick={onClose}> {/* Close on overlay click */}
      <ModalContent onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking content */}
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <VideoWrapper>
          <iframe
            src={currentVideoUrl}
            title="Portfolio Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
