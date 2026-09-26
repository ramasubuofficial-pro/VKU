import React from 'react';

import ContactHero from '../components/contact/ContactHero';
import OfficeDirectory from '../components/contact/OfficeDirectory';
import DirectContact from '../components/contact/DirectContact';
import ContactCTA from '../components/contact/ContactCTA';

const Contact = () => {

  return (
    <div>
      <ContactHero />

      <OfficeDirectory />

      <DirectContact />

      <ContactCTA />
    </div>
  );
};

export default Contact;
