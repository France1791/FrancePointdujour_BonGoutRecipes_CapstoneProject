import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className=" flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/3 px-4">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Bon Gout Recipes is your go-to source for delicious and healthy recipes. We're passionate about good food and better health.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/recipes" className="text-gray-400 hover:text-white transition duration-300">Recipes</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Our content is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
          <p className='font-semibold mb-4'>&copy; {new Date().getFullYear()} Bon Gout Recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;