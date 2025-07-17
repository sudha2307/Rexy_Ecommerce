import React, { useState, useEffect, useRef } from 'react';
import {
  FiSearch, FiUser, FiHeart, FiShoppingBag, FiMapPin, FiMenu, FiX
} from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  {
    name: "Men",
    items: [
      { title: "T-Shirts", link: "/products/men/tshirts" },
      { title: "Jeans", link: "/products/men/jeans" },
      { title: "Shirts", link: "/products/men/shirts" },
      { title: "Sleeveless", link: "/products/men/sleeveless" },
      { title: "Jackets", link: "/products/men/jackets" },
      { title: "Shoes", link: "/products/men/shoes" },
    ],
  },
  {
    name: "Women",
    items: [
      { title: "Dresses", link: "/products/women/dresses" },
      { title: "Tops", link: "/products/women/tops" },
      { title: "Handbags", link: "/products/women/bags" },
      { title: "Shoes", link: "/products/women/shoes" },
      { title: "Skirts", link: "/products/women/skirts" },
      { title: "Jewelry", link: "/products/women/jewelry" },
    ],
  },
  {
    name: "Kids",
    items: [
      { title: "T-Shirts", link: "/products/kids/tshirts" },
      { title: "Shorts", link: "/products/kids/shorts" },
      { title: "Toys", link: "/products/kids/toys" },
      { title: "Shoes", link: "/products/kids/shoes" },
      { title: "Hoodies", link: "/products/kids/hoodies" },
      { title: "Accessories", link: "/products/kids/accessories" },
    ],
  },
  {
    name: "Gadgets",
    items: [
      { title: "Smartphones", link: "/products/gadgets/smartphones" },
      { title: "Headphones", link: "/products/gadgets/headphones" },
      { title: "Smartwatches", link: "/products/gadgets/smartwatches" },
      { title: "Speakers", link: "/products/gadgets/speakers" },
      { title: "Laptops", link: "/products/gadgets/laptops" },
      { title: "Chargers", link: "/products/gadgets/chargers" },
    ],
  },
  {
    name: "Sportswear",
    items: [
      { title: "Track Pants", link: "/products/sportswear/trackpants" },
      { title: "Gym T-Shirts", link: "/products/sportswear/tshirts" },
      { title: "Running Shoes", link: "/products/sportswear/shoes" },
      { title: "Hoodies", link: "/products/sportswear/hoodies" },
      { title: "Wristbands", link: "/products/sportswear/wristbands" },
      { title: "Shorts", link: "/products/sportswear/shorts" },
    ],
  },
];

const cities = ['Chennai', 'Bangalore', 'Hyderabad', 'Delhi', 'Mumbai', 'Kolkata'];

const Navbar = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState('Chennai');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAllCategoriesClick = () => navigate('/categories');

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Nav */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-primary">
          <img src="/assets/rexy.png" alt="Logo" className="w-12 h-12 object-contain" />
          Rexy
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 max-w-xl">
          <div className="flex items-center border rounded-lg overflow-hidden w-full">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full px-4 py-2 outline-none"
            />
            <button className="bg-green-500 text-white px-4 py-2">
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex gap-6 items-center text-sm">
          <div className="flex items-center gap-1">
            <FiUser className="text-xl" />
            <span>Account</span>
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <FiHeart className="text-xl" />
            <span>Wishlist</span>
          </div>
          <div className="flex items-center gap-1">
            <FiShoppingBag className="text-xl" />
            <span>Cart</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Bottom Nav */}
      <nav className="border-t hidden md:flex justify-between items-center px-6 py-3 relative">
        {/* All Categories */}
        <button
          onClick={handleAllCategoriesClick}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          📦 All Categories
        </button>

        {/* Navigation Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-green-600 no-underline">Home</Link>
          </li>

          <li
            className="relative"
            ref={categoryRef}
            onMouseEnter={() => setCategoryDropdownOpen(true)}
            onMouseLeave={() => setCategoryDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-600">
              Categories <MdKeyboardArrowDown />
            </button>
            {categoryDropdownOpen && (
              <div className="absolute top-10 left-0 bg-white border shadow-lg p-6 grid grid-cols-3 gap-6 w-[750px] z-50">
                {categories.map((cat, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-green-600 mb-2">{cat.name}</h4>
                    <ul className="space-y-1 text-sm">
                      {cat.items.map(({ title, link }) => (
                        <li key={title}>
                          <Link to={link} className="text-gray-700 hover:text-green-600">
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>

          <li><Link to="/products" className="hover:text-green-600 no-underline">Products</Link></li>
          <li><Link to="/blog" className="hover:text-green-600 no-underline">Blog</Link></li>
          <li><Link to="/pages" className="hover:text-green-600 no-underline">Pages</Link></li>
          <li className="text-yellow-600">⚡ Offers</li>
        </ul>

        {/* Location Selector */}
        <div className="relative">
          <button
            onClick={() => setLocationOpen(!locationOpen)}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded text-gray-700"
          >
            <FiMapPin className="text-xl text-green-600" />
            {location}
            <MdKeyboardArrowDown />
          </button>
          {locationOpen && (
            <ul className="absolute right-0 mt-2 bg-white border rounded shadow-md w-40 z-50">
              {cities.map((city) => (
                <li key={city}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setLocation(city);
                      setLocationOpen(false);
                    }}
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <button onClick={handleAllCategoriesClick} className="w-full text-left font-semibold text-green-600">
            📦 All Categories
          </button>

          <Link to="/" className="block py-1 text-gray-700 hover:text-green-600">Home</Link>

          {/* Mobile Dropdown */}
          <div>
            <button onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)} className="flex items-center gap-1 text-gray-700 hover:text-green-600">
              Categories <MdKeyboardArrowDown />
            </button>
            {categoryDropdownOpen && (
              <div className="pl-4 mt-2 space-y-3 text-sm">
                {categories.map((cat, index) => (
                  <div key={index}>
                    <p className="font-medium text-green-700">{cat.name}</p>
                    <ul className="ml-2">
                      {cat.items.map(({ title, link }) => (
                        <li key={title}>
                          <Link to={link} className="block py-1 text-gray-700 hover:text-green-600">
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/products" className="block py-1 text-gray-700 hover:text-green-600">Products</Link>
          <Link to="/blog" className="block py-1 text-gray-700 hover:text-green-600">Blog</Link>
          <Link to="/pages" className="block py-1 text-gray-700 hover:text-green-600">Pages</Link>
          <div className="text-yellow-600 font-medium">⚡ Offers</div>

          {/* Mobile Location */}
          <div className="pt-4">
            <p className="font-semibold text-gray-700">Select Location</p>
            {cities.map((city) => (
              <button
                key={city}
                className="block w-full text-left py-1 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setLocation(city);
                  setLocationOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
