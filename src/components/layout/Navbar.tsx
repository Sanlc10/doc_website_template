import React, { useState } from 'react';
import { List, X, CaretDown } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold text-neutral-900 font-serif">MediCare</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-neutral-900 font-medium hover:text-primary-main transition-colors">
              Home
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-neutral-900 font-medium hover:text-primary-main transition-colors">
                Services
                <CaretDown className="w-4 h-4" weight="bold" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#consultation" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary-main">
                    Virtual Consultation
                  </a>
                  <a href="#appointment" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary-main">
                    Make Appointment
                  </a>
                  <a href="#pharmacy" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary-main">
                    Online Pharmacy
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-neutral-900 font-medium hover:text-primary-main transition-colors">
                About us
                <CaretDown className="w-4 h-4" weight="bold" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#about" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary-main">
                    Our Story
                  </a>
                  <a href="#team" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary-main">
                    Our Team
                  </a>
                </div>
              </div>
            </div>
            <a href="#contact" className="text-neutral-900 font-medium hover:text-primary-main transition-colors">
              Contact
            </a>
          </div>

          {/* Sign In Button */}
          <div className="hidden lg:block">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" weight="bold" /> : <List className="w-6 h-6" weight="bold" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-neutral-900 font-medium hover:text-primary-main">
              Home
            </a>
            <a href="#services" className="text-neutral-900 font-medium hover:text-primary-main">
              Services
            </a>
            <a href="#about" className="text-neutral-900 font-medium hover:text-primary-main">
              About us
            </a>
            <a href="#contact" className="text-neutral-900 font-medium hover:text-primary-main">
              Contact
            </a>
            <Button variant="outline" size="sm" className="w-full">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
