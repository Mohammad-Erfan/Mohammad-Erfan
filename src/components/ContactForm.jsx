import React, { useRef, useState } from 'react'; // Import useRef and useState
import emailjs from '@emailjs/browser'; // Import emailjs
import styled from 'styled-components'; // Import styled-components for SubmissionMessage
import {
  ContactWrapper,
  SectionTitle,
  FormStyled,
  InputGroup,
  Label,
  Input,
  Textarea, // Ensure Textarea is imported
  SubmitButton
} from './ContactForm.styled';

// Placeholder for user feedback message
const SubmissionMessage = styled.p`
  color: ${({ type }) => (type === 'success' ? '#4CAF50' : '#F44336')};
  font-size: 1rem;
  margin-top: 1rem;
`;


function ContactForm() {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  // !!! IMPORTANT: Replace with your actual EmailJS credentials !!!
  const YOUR_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
  const YOUR_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
  const YOUR_USER_ID = 'YOUR_USER_ID_HERE'; // This is often called Public Key in EmailJS

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Basic validation: Check if credentials are placeholders
    if (YOUR_SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
        YOUR_TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE' ||
        YOUR_USER_ID === 'YOUR_USER_ID_HERE') {
      alert('EmailJS credentials are placeholders. Please update them in ContactForm.jsx to send emails.');
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmissionStatus('success');
          form.current.reset(); // Reset form fields
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmissionStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ContactWrapper id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <FormStyled ref={form} onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="user_name">Name</Label> {/* Changed name to user_name for EmailJS template compatibility */}
          <Input type="text" id="user_name" name="user_name" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="user_email">Email</Label> {/* Changed name to user_email */}
          <Input type="email" id="user_email" name="user_email" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required /> {/* Using imported Textarea */}
        </InputGroup>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </FormStyled>
      {submissionStatus === 'success' && (
        <SubmissionMessage type="success">
          Message sent successfully! I'll get back to you soon.
        </SubmissionMessage>
      )}
      {submissionStatus === 'error' && (
        <SubmissionMessage type="error">
          Oops! Something went wrong. Please try again later or contact me directly.
        </SubmissionMessage>
      )}
    </ContactWrapper>
  );
}

export default ContactForm;
