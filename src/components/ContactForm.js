import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    contactMethod: 'Phone'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-form-container bg-black text-white p-8">
      <h2 className="text-2xl font-semibold mb-4">Ready to Elevate Your B2B Lead Generation?</h2>
      <h3 className="text-lg mb-6">Get Started Today</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block mb-2">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          <div>
            <label htmlFor="companyName" className="block mb-2">Company Name</label>
            <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          <div>
            <label htmlFor="contactMethod" className="block mb-2">Preferred Contact Method</label>
            <select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white">
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </div>
        <button type="submit" className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 ease-in-out">Get a Free Consultation</button>
      </form>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p>Phone: +1 512-240-2212</p>
        <p>Email: info@vereigenmedia.com</p>
        <p>Address: 1401 Lavaca Street #800 Austin, TX 78701</p>
      </div>
    </div>
  );
}

export default ContactForm;
