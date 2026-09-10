import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield, PhoneCall } from 'lucide-react';
import { COACH_PROFILE } from '../data';

interface NavbarProps {
  onOpenBooking: (preselectedPackage?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Results', href: '#results' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Packages', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-white py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on left */}
          <a
            id="brand-logo-link"
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-[#1F4788] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#163568] transition-colors">
              RK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#1F4788] leading-tight">
                {COACH_PROFILE.name}
              </span>
              <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">
                Growth & Leadership Coach
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-[15px] font-medium text-gray-700 hover:text-[#1F4788] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#00B4D8] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Actions on Right */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="header-phone-link"
              href={`tel:${COACH_PROFILE.phone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#1F4788] px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>+91 98201 45892</span>
            </a>

            <button
              id="header-book-consultation-btn"
              onClick={() => onOpenBooking()}
              className="bg-[#1F4788] hover:bg-[#163568] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 group cursor-pointer border border-[#1F4788]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#00B4D8] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="header-mobile-quick-book-btn"
              onClick={() => onOpenBooking()}
              className="bg-[#1F4788] text-white text-xs font-semibold px-3 py-2 rounded-md"
            >
              Book
            </button>
            <button
              id="mobile-hamburger-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#1F4788] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-white border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2.5 rounded-md text-base font-medium text-gray-800 hover:text-[#1F4788] hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-3">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#1F4788] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm text-center"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>30-Min Confidential Diagnostic • 100% Free</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
