import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from "react-icons/fa";

// NavItem Component
const NavItem = ({ to, label, isMobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        isActive ? "text-floraPink font-semibold" : "hover:text-floraPink"
      } ${isMobile ? "block py-2" : ""}`}
      style={{ textDecoration: "none" }}
      onClick={isMobile ? onClick : undefined}
    >
      {label}
    </Link>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { to: "/", label: "الرئيسية" },
    { to: "/shop", label: "المتجر" },
    { to: "/gallery", label: "معرض الصور" },
    { to: "/contact-us", label: "اتصل بنا" },
    { to: "/about-us", label: "من نحن" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-floraPeach text-white shadow-md z-50">
      <div className="container mx-auto flex items-center  p-1">
        {/* Logo Image */}
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dswehdo2v/image/upload/v1742344508/logo_bgzmmt.svg"
            alt="Flora Pop Logo"
            className="w-[10vh] h-[10vh] mr-2"
          />
        </Link>

        {/* Desktop Navigation and Icons */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
          {/* Search Icon */}
          <Link to="/search" className="hover:text-floraPink" style={{ textDecoration: "none" }}>
            <FaSearch size={20} />
          </Link>
          {/* Cart Icon */}
          <Link to="/cart" className="hover:text-floraPink" style={{ textDecoration: "none" }}>
            <FaShoppingCart size={20} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-floraPink p-4">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              isMobile={true}
              onClick={() => setIsOpen(false)}
            />
          ))}
          {/* Mobile Search Icon */}
          <Link
            to="/search"
            className="block py-2 hover:text-floraPink"
            style={{ textDecoration: "none" }}
            onClick={() => setIsOpen(false)}
          >
            <FaSearch size={20} /> البحث
          </Link>
          {/* Mobile Cart Icon */}
          <Link
            to="/cart"
            className="block py-2 hover:text-floraPink"
            style={{ textDecoration: "none" }}
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingCart size={20} /> العربة
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;