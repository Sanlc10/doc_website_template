import React from 'react';
import { Envelope, Phone, MapPin, FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-3xl font-bold font-serif">MediCare</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Providing comprehensive healthcare solutions with a commitment to excellence
              and patient satisfaction.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-main flex items-center justify-center transition-colors"
              >
                <FacebookLogo className="w-5 h-5" weight="fill" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-main flex items-center justify-center transition-colors"
              >
                <TwitterLogo className="w-5 h-5" weight="fill" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-main flex items-center justify-center transition-colors"
              >
                <InstagramLogo className="w-5 h-5" weight="fill" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-main flex items-center justify-center transition-colors"
              >
                <LinkedinLogo className="w-5 h-5" weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-neutral-400 hover:text-primary-main transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-main transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary-main transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary-main transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#consultation" className="text-neutral-400 hover:text-primary-main transition-colors">
                  Virtual Consultation
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-neutral-400 hover:text-primary-main transition-colors">
                  Make Appointment
                </a>
              </li>
              <li>
                <a href="#pharmacy" className="text-neutral-400 hover:text-primary-main transition-colors">
                  Online Pharmacy
                </a>
              </li>
              <li>
                <a href="#emergency" className="text-neutral-400 hover:text-primary-main transition-colors">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-main flex-shrink-0 mt-1" weight="duotone" />
                <span className="text-neutral-400">
                  123 Healthcare Ave, Medical District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-main flex-shrink-0" weight="duotone" />
                <a href="tel:+1234567890" className="text-neutral-400 hover:text-primary-main transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Envelope className="w-5 h-5 text-primary-main flex-shrink-0" weight="duotone" />
                <a href="mailto:info@medicare.com" className="text-neutral-400 hover:text-primary-main transition-colors">
                  info@medicare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {currentYear} MediCare. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-neutral-400 hover:text-primary-main transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-neutral-400 hover:text-primary-main transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
