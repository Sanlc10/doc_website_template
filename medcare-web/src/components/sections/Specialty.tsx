import React from 'react';
import { CheckCircle, UsersThree, ChatCircle, FileText, Clock } from '@phosphor-icons/react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const Specialty: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Reduce Administrative',
      description: 'Minimize paperwork and streamline processes',
    },
    {
      icon: ChatCircle,
      title: 'Streamline Communications',
      description: 'Efficient communication between all parties',
    },
    {
      icon: UsersThree,
      title: 'Coordinate Care',
      description: 'Seamless coordination across departments',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Quick and efficient service delivery',
    },
  ];

  return (
    <Section className="py-section">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-pill bg-white hover:bg-neutral-50 transition-colors duration-200 border border-neutral-100"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary-main/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary-main" weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-secondary-main" weight="bold" />
            </div>
          ))}
        </div>

        {/* Right - Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-secondary-light">
              <CheckCircle className="w-5 h-5 text-secondary-main" weight="bold" />
              <span className="text-sm font-semibold text-secondary-main">
                SPECIALTY CARE
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Specialty Enrollment is Streamlined
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Our advanced healthcare platform simplifies the enrollment process,
              making it easier for patients to access specialized care. With integrated
              systems and automated workflows, we ensure a smooth experience from
              start to finish.
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              We leverage cutting-edge technology to reduce wait times, improve
              communication, and provide better outcomes for all our patients.
              Your journey to better health starts here.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Learn More
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-100">
            <div>
              <div className="text-3xl font-bold text-primary-main">50%</div>
              <div className="text-sm text-neutral-600">Faster Process</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-main">24/7</div>
              <div className="text-sm text-neutral-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-main">100+</div>
              <div className="text-sm text-neutral-600">Specialists</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
