import styled from 'styled-components';

export const ContactWrapper = styled.section`
  padding: 4rem 2rem;
  background: #23233b; // Slightly different dark background
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

export const FormStyled = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #e0e0e0;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid #4f4f6a; // Darker border
  background: #1a1a2e; // Dark input background
  color: #e0e0e0;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9c27b0; // Purple border on focus
  }
`;

export const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid #4f4f6a;
  background: #1a1a2e;
  color: #e0e0e0;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical; // Allow vertical resize
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9c27b0;
  }
`;

export const SubmitButton = styled.button`
  background: #9c27b0; // Primary purple
  color: white;
  padding: 0.8rem 2.5rem;
  border-radius: 50px; // Pill shape
  border: none;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(156, 39, 176, 0.4);
  align-self: center; // Center button if form is wider

  &:hover {
    background: #7b1fa2; // Darker purple on hover
    transform: translateY(-3px);
  }
`;
