// HeroSection.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Style.css'

const HeroSection = () => {
  return (
    <section className="hero-section mx-auto">
      <Container>
        <div className="hero-nav flex items-center justify-between px-8 py-4">
          <div className="flex items-center">
            <img src="VM-logo.svg" alt="Hero" className="hero-logo mr-4" />
            <h3 className="text-xl font-bold">VEREIGEN MEDIA</h3>
          </div>
          <div className="flex items-center space-x-6">
            <a href="" className="text-slate-50 hover:text-gray-900 transition duration-300 ease-in-out">Home</a>
            <a href="" className="text-slate-50 hover:text-gray-900 transition duration-300 ease-in-out">Services</a>
            <a href="" className="text-slate-50 hover:text-gray-900 transition duration-300 ease-in-out">About</a>
          </div>
        </div>
        <Row>
          <Col md="6">
            <h1 className="hero-title">Unlock Your B2B Growth Potential</h1>
            <p className="hero-subtitle">Vereigen Media - Your Partner in Lead Generation Excellence</p>
          </Col>
          <Col md="6">
            <img src="vg-hero.png" alt="Hero " className="hero-image" />
          </Col>
          <Col md="6">
            <h3 className='hero-intro mt-4 mx-10 mb-8'>At Vereigen Media, we understand that in the ever-evolving world of B2B business, leads are
              the lifeblood of growth. That's why we're here to transform your lead generation efforts into
              a streamlined, results-driven powerhouse. With our expertise, cutting-edge strategies, and
              relentless dedication, we bring your ideal clients to your doorstep.</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;