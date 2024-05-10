// AboutUsSection.js
import React from 'react';
//import { Container, Row, Col } from 'reactstrap';
//import '../Style.css'

const AboutUsSection = () => {
  return (
    <div className="about-us -m-16 mb-1">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">Testimonials</h2>
        <h4 className='text-l text-center -mt-8 mb-8'>Hear What Our Clients Say...</h4>
        <div className="flex flex-wrap -mt-5">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                John Smith
                <p className='text-xl'> CEO, XYZ Corporation</p>
              </div>
              <ul className="w-full text-center text-sm">
                <h4 className='p-2'>"Working with Vereigen Media has been a game-changer for our business. Their strategic approach to digital marketing has helped us reach new heights in terms of online visibility and lead generation. The team's expertise and dedication have made them invaluable partners."</h4>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Jane Doe
                <p className='text-xl' >CMO, ABC Enterprises</p>
              </div>
              <h4 className='p-3'>"Vereigen Media has exceeded our expectations in every way. Their innovative digital marketing strategies have not only increased our brand awareness but have also significantly boosted our conversion rates."</h4>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-4xl font-bold text-center border-b-4">
                Tim Hawkins
                <p className='text-xl'>CFO,ABC Tech</p>
              </div>
             <h4 className='p-3'>"Choosing Vereigen Media was one of the best decisions we made for our startup. Their comprehensive approach to digital marketing has helped us establish a strong online presence from scratch."</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;