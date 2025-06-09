import styled from 'styled-components';

export const ContactWrapper = styled.section`
  padding: 4rem 2rem;
  background: #181818; // Section panel background
  // border-top: 1px solid #282828;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #F5F5F5;
  margin-bottom: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }
`;

export const FormStyled = styled.form`
  max-width: 650px; // Slightly wider
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem; // Adjusted gap
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #B0B0B0; // Muted label color
  font-size: 0.85rem; // Smaller label
  font-weight: 400;
`;

const commonInputStyles = `
  padding: 0.75rem 1rem; // Consistent padding
  border-radius: 5px; // Slightly softer radius than cards
  border: 1px solid #383838; // Darker, subtle border
  background: #222222; // Dark input background
  color: #E0E0E0;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #A095E5; // Accent color on focus
    box-shadow: 0 0 0 2px rgba(160, 149, 229, 0.3); // Subtle glow on focus
  }
  &::placeholder {
    color: #666;
  }
`;

export const Input = styled.input`
  ${commonInputStyles}
`;

export const Textarea = styled.textarea`
  ${commonInputStyles}
  min-height: 120px; // Adjusted height
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background: #A095E5; // Consistent with HeroButton
  color: #121212;
  padding: 0.8rem 2rem;
  border-radius: 6px;
  border: 1px solid #A095E5;
  text-decoration: none;
  font-size: 0.95rem; // Slightly smaller than hero
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  align-self: center; // Center button
  margin-top: 1rem; // Space above button

  &:hover:not(:disabled) {
    background: #BEB6F0;
    border-color: #BEB6F0;
    color: #121212;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SubmissionMessage = styled.p`
  color: ${({ type }) => (type === 'success' ? '#66BB6A' : '#EF5350')}; // Softer success/error colors
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
  font-weight: 400;
`;
