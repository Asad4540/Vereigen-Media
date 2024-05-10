// ServicesSection.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <Container className='mx-10 -mt-10'>
        <h2 className="services-title">Why Choose Vereigen Media?</h2>
        <Row>
          <Col md="4">
            <div className="service-card">
              <i className="fas fa-chart-bar" />
              <h3>Targeted Lead Generation:</h3>
              <p>Attract high-quality B2B leads that matter. We tailor our strategies to pinpoint your ideal
                audience, ensuring every lead is a potential game-changer</p>
            </div>
          </Col>
          <Col md="4">
            <div className="service-card">
              <i className="fas fa-bullhorn" />
              <h3>Data-Driven Approach:</h3>
              <p>We don't guess; we analyze. Our data-driven methodologies fine-tune your lead generation
                efforts for maximum ROI.</p>
            </div>
          </Col>
          <Col md="4">
            <div className="service-card">
              <i className="fas fa-laptop-code" />
              <h3>Customized Solutions:</h3>
              <p>Your business is unique, and so are your lead generation needs. Our solutions are tailored to
                fit your industry, goals, and challenges.
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className="service-card">
              <i className="fas fa-bullhorn" />
              <h3>Expert Team:</h3>
              <p>Our team of seasoned professionals is obsessed with lead generation. We're on the cutting
                edge of industry trends, so you don't have to be</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;