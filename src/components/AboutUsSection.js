// AboutUsSection.js
import React from 'react';
//import { Container, Row, Col } from 'reactstrap';
//import '../Style.css'

const AboutUsSection = () => {
  return (
    <div className="about-us">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">About Us</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Card 1
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Item 1</li>
                <li className="border-b py-4">Item 2</li>
                <li className="border-b py-4">Item 3</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Card 2
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Item 1</li>
                <li className="border-b py-4">Item 2</li>
                <li className="border-b py-4">Item 3</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-4xl font-bold text-center border-b-4">
                Card 3
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Item 1</li>
                <li className="border-b py-4">Item 2</li>
                <li className="border-b py-4">Item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;