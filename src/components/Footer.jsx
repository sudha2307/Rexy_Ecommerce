import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12 md:px-20 lg:px-28">
      <div className="grid md:grid-cols-5 gap-10">
        {/* Logo + Description */}
        <div className="md:col-span-1">
          <div className="flex items-center mb-4">
            <img src="/assets/rexy.png" alt="ss" height={90} width={90}/>
          </div>
          <p className="text-sm text-gray-300">
            Discover the latest trends and enjoy seamless shopping with our exclusive collections.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2" />
              <span>Rexy - say bye for offline shopping</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>Call Us: 9159213595</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>Email Us: hellotechdoctors@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CATEGORIES</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Gadgets</li>
            <li>Sportswear</li>
            
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Collections</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Offers</li>
            <li>Search</li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-lg font-semibold mb-4">HELP CENTER</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>My Account</li>
            <li>My Orders</li>
            <li>Wishlist</li>
            <li>FAQ's</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Follow Us / Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
          <p className="text-sm text-gray-300 mb-4">
            Never Miss Anything From Store By Signing Up To Our Newsletter.
          </p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 rounded-l bg-white text-black text-sm"
            />
            <button className="bg-orange-500 px-4 py-2 text-white font-bold rounded-r text-sm">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex space-x-3">
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded">
              <FaFacebookF />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded">
              <FaTwitter />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded">
              <FaInstagram />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded">
              <FaPinterestP />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
