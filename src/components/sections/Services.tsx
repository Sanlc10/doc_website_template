import React from 'react';
import { Stethoscope, CalendarBlank, Pill, ArrowRight } from '@phosphor-icons/react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Virtual Consultation',
      description:
        'Connect with healthcare professionals from the comfort of your home through secure video consultations.',
      color: 'bg-primary-main/10',
      iconColor: 'text-primary-main',
    },
    {
      icon: CalendarBlank,
      title: 'Make Appointment',
      description:
        'Schedule appointments with specialists at your convenience. Easy booking system with instant confirmation.',
      color: 'bg-primary-main/10',
      iconColor: 'text-primary-main',
    },
    {
      icon: Pill,
      title: 'Online Pharmacy',
      description:
        'Order medications online and get them delivered to your doorstep. Safe, secure, and convenient.',
      color: 'bg-primary-main/10',
      iconColor: 'text-primary-main',
    },
  ];

  return (
    <Section background="alt" className="py-section">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
          We Offer a Wide Range of Unique Services
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Comprehensive healthcare solutions designed to meet all your medical needs
          with convenience and expertise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group cursor-pointer">
            <div className="space-y-6">
              {/* Icon */}
              <div className={`w-20 h-20 rounded-3xl ${service.color} flex items-center justify-center`}>
                <service.icon className={`w-10 h-10 ${service.iconColor}`} weight="duotone" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow Button */}
              <button className="w-12 h-12 rounded-full bg-primary-main text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-button">
                <ArrowRight className="w-5 h-5" weight="bold" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
