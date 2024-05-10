// FooterSection.js
import React from 'react';
import { Container } from 'reactstrap';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <Container>
        <p>&copy; {new Date().getFullYear()} Vereigen Media. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default FooterSection;