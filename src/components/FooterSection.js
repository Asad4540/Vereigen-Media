// FooterSection.js
import React from 'react';
import { Container } from 'reactstrap';

const FooterSection = () => {
  return (
    <footer className="footer-section  bg-yellow-500">
      <Container className='p-2 text-center mt-2'>
         <p>Navigation Menu: Home | Services | About Us | Contact Us</p>
         <p> Copyright: © 2023 Vereigen Media. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default FooterSection;