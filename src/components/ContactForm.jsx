import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; // Import motion
import {
  ContactWrapper,
  SectionTitle,
  FormStyled,
  InputGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
  SubmissionMessage // Ensure this is imported
} from './ContactForm.styled';

// Framer motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } }
};

const formElementVariants = { // For individual form elements if desired
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "circOut" } }
};


function ContactForm() {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // !!! IMPORTANT: Replace with your actual EmailJS credentials !!!
  const YOUR_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
  const YOUR_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
  const YOUR_USER_ID = 'YOUR_USER_ID_HERE'; // This is often called Public Key in EmailJS

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

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
          form.current.reset();
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmissionStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };


  return (
    <ContactWrapper
      as={motion.section}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <SectionTitle>Get In Touch</SectionTitle>
      <FormStyled ref={form} onSubmit={handleSubmit} as={motion.form} variants={formElementVariants}> {/* Animate form as a whole */}
        <InputGroup> {/* Can apply variants to InputGroup as well for staggered effect */}
          <Label htmlFor="user_name">Name</Label>
          <Input type="text" id="user_name" name="user_name" required placeholder="Your Name" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="user_email">Email</Label>
          <Input type="email" id="user_email" name="user_email" required placeholder="your.email@example.com" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required placeholder="How can I help you?" />
        </InputGroup>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </FormStyled>
      {submissionStatus && ( // Simplified conditional rendering
        <SubmissionMessage type={submissionStatus}>
          {submissionStatus === 'success'
            ? 'Message sent successfully! I\'ll get back to you soon.'
            : 'Oops! Something went wrong. Please try again later.'}
        </SubmissionMessage>
      )}
    </ContactWrapper>
  );
}

export default ContactForm;
