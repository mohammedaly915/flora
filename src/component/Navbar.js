import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

// NavItem Component for navigation links
const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-gray-800 font-medium transition-all duration-300 hover:text-floraPink hover:scale-105 ${
          isActive ? "text-floraPink" : ""
        }`
      }
      style={{ textDecoration: "none" }}
    >
      {label}
    </NavLink>
  );
};

const Navbar = () => {
  const navItems = [
    { to: "/", label: "الرئيسية" },
  { to: "/shop", label: "المتجر" },
  { to: "/gallery", label: "معرض الصور" },
  { to: "/contact-us", label: "اتصل بنا" },
  { to: "/about-us", label: "من نحن" },
  ];

  return (
    <nav className="bg-floraPeach shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-1">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dswehdo2v/image/upload/v1742344508/logo_bgzmmt.svg"
              alt="Flora Pop Logo"
              className="w-[10vh] h-[10vh] mr-2 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </div>
        </div>

        {/* Right Side: Search and Cart Icons */}
        <div className="flex items-center gap-4">
          <Link
            to="/search"
            className="text-gray-800 transition-all duration-300 hover:text-floraPink hover:scale-110"
            style={{ textDecoration: "none" }}
          >
            <FaSearch size={20} />
          </Link>
          <Link
            to="/cart"
            className="text-gray-800 transition-all duration-300 hover:text-floraPink hover:scale-110"
            style={{ textDecoration: "none" }}
          >
            <FaShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;