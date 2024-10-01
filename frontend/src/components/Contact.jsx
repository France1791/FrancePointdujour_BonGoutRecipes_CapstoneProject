import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import BackButton from './BackButton';

function Contact() {
  return (
    <div className="bg-green-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <BackButton />
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-green-600 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">We'd love to hear from you. Please fill out the form or contact us using the information below.</p>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              <span>info@bongoutrecipes.com</span>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
