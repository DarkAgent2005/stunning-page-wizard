
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled
          ? "bg-dark/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gold">ProductiPro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-slate-300 hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/#features" className="text-slate-300 hover:text-gold transition-colors">
            Features
          </Link>
          <Link to="/#pricing" className="text-slate-300 hover:text-gold transition-colors">
            Pricing
          </Link>
          <Link to="/#testimonials" className="text-slate-300 hover:text-gold transition-colors">
            Testimonials
          </Link>
          <Link to="/login" className="text-slate-300 hover:text-gold transition-colors">
            Login
          </Link>
          <Button 
            variant="default" 
            className="bg-gold text-dark hover:bg-gold-light"
          >
            Get Started <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gold" />
            ) : (
              <Menu className="h-6 w-6 text-gold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-light border-b border-dark-lighter animate-fade-down">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-slate-300 hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/#features"
              className="text-slate-300 hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/#pricing"
              className="text-slate-300 hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/#testimonials"
              className="text-slate-300 hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/login"
              className="text-slate-300 hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Button 
              variant="default" 
              className="bg-gold text-dark hover:bg-gold-light w-full justify-center"
            >
              Get Started <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
