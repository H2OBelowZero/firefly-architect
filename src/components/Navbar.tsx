
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = 
    "py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-muted";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-fire flex items-center justify-center">
            <span className="font-bold text-white">FP</span>
          </div>
          <span className="font-bold text-lg">FirePlan</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>
          <Link to="/features" className={navLinkClass}>
            Features
          </Link>
          <Link to="/pricing" className={navLinkClass}>
            Pricing
          </Link>
          <Link to="/about" className={navLinkClass}>
            About
          </Link>
          <div className="w-px h-6 bg-border mx-2"></div>
          <Link to="/auth" className={`${navLinkClass} text-fire`}>
            Login
          </Link>
          <Link
            to="/auth?register=true"
            className="ml-2 btn-primary bg-fire text-white hover:bg-fire/90"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass shadow-md py-3 px-4 animate-slide-down">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className="py-2 px-3 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="py-2 px-3 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="py-2 px-3 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="py-2 px-3 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="border-t border-border my-2"></div>
            <Link
              to="/auth"
              className="py-2 px-3 rounded-md hover:bg-muted transition-colors text-fire"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/auth?register=true"
              className="btn-primary bg-fire text-white hover:bg-fire/90 flex justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
