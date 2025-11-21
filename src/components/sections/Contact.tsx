import React, { useState } from 'react';
import { Phone, Envelope, Clock } from '@phosphor-icons/react';
import { Section } from '../ui/Section';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section background="alt" className="py-section">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Form */}
        <div className="bg-white rounded-card shadow-card p-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-neutral-900 mb-6">
            Schedule an Appointment Today!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: First Name, Last Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-900 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-main focus:border-transparent transition-all"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-main focus:border-transparent transition-all"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Row 2: Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-main focus:border-transparent transition-all"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            {/* Row 3: Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-main focus:border-transparent transition-all"
                placeholder="+1 (234) 567-890"
                required
              />
            </div>

            {/* Row 4: Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-neutral-900 mb-2">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-main focus:border-transparent transition-all bg-white"
                required
              >
                <option value="">Select a service</option>
                <option value="consultation">Virtual Consultation</option>
                <option value="appointment">Make Appointment</option>
                <option value="pharmacy">Online Pharmacy</option>
                <option value="emergency">Emergency Care</option>
              </select>
            </div>

            {/* Row 5: Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-main focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your needs..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-main text-white py-4 rounded-pill font-semibold hover:bg-primary-hover transition-colors duration-200 shadow-button"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column - Info */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <p className="text-sm font-bold text-secondary-main uppercase tracking-wide mb-3">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-neutral-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Have questions or ready to schedule your appointment? Contact us through any of the following channels and our team will be happy to assist you.
            </p>
          </div>

          {/* Contact Items */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary-main flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" weight="duotone" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                  Phone
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-lg font-semibold text-neutral-900 hover:text-secondary-main transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary-main flex items-center justify-center flex-shrink-0">
                <Envelope className="w-7 h-7 text-white" weight="duotone" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:info@medicare.com"
                  className="text-lg font-semibold text-neutral-900 hover:text-secondary-main transition-colors"
                >
                  info@medicare.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-white rounded-card shadow-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-main/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-main" weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-neutral-900">
                Opening Hours
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                <span className="text-neutral-600 font-medium">Monday - Friday</span>
                <span className="text-neutral-900 font-semibold">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                <span className="text-neutral-600 font-medium">Saturday</span>
                <span className="text-neutral-900 font-semibold">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-neutral-600 font-medium">Sunday</span>
                <span className="text-neutral-900 font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
