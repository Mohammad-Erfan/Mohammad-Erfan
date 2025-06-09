import React from 'react';
import {
  ContactWrapper,
  SectionTitle,
  FormStyled,
  InputGroup,
  Label,
  Input,
  Textarea,
  SubmitButton
} from './ContactForm.styled';

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic form submission alert, actual logic later
    alert('Form submitted! (This is a placeholder)');
  };

  return (
    <ContactWrapper id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <FormStyled onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required />
        </InputGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </FormStyled>
    </ContactWrapper>
  );
}

export default ContactForm;
