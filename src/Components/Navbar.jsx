import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-md py-3"
        : "bg-white/80 backdrop-blur-md py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl font-bold tracking-wide text-gray-900 cursor-pointer">
            RAFI
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/about">
            <li className="hover:text-blue-600 cursor-pointer transition">
              About
            </li>
          </Link>
          <Link to="/service">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Services
            </li>
          </Link>
          <Link to="/work">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Work
            </li>
          </Link>
          <Link to="/tools">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Tools
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Contact
            </li>
          </Link>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
              Hire Me
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-700 font-medium">
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
          </Link>
          <Link to="/service" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
          </Link>
          <Link to="/work" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-600 cursor-pointer">Work</li>
          </Link>
          <Link to="/tools" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-600 cursor-pointer">Tools</li>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </Link>
        </ul>

        <div className="flex justify-center mt-6">
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}