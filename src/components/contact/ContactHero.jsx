import React from 'react';
import PageHero from '../common/PageHero';

const ContactHero = () => {
  return (
    <PageHero
      eyebrow="GET IN TOUCH"
      title={<>Let's talk about your<br />business requirements.</>}
      description="Whether you are looking for audit support, tax and compliance services, business advisory or finance operations support, we invite you to connect with our team."
    />
  );
};

export default ContactHero;
