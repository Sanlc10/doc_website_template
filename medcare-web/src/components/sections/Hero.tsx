import React from 'react';
import { ArrowRight, UsersThree, Medal } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import doctorImage from '../../assets/doctor.png';

export const Hero: React.FC = () => {
  const stats = [
    { icon: UsersThree, value: '400+', label: 'Doctors' },
    { icon: UsersThree, value: '500+', label: 'Patients' },
    { icon: Medal, value: '97%', label: 'Satisfaction' },
  ];

  return (
    <Section className="pt-8 pb-section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Our Healthcare Solutions Meet Every Need
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              With a team of experienced professionals and state-of-the-art facilities,
              we provide comprehensive healthcare services tailored to your unique needs.
              Your health and well-being are our top priorities.
            </p>
          </div>

          <div>
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" weight="bold" />}>
              Get Started
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-neutral-100">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-secondary-main" weight="duotone" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Single Masked Image */}
        <div className="relative">
          <div className="relative h-[400px] lg:h-[600px] w-full">
            {/* Single masked image container */}
            <div
              className="absolute inset-0"
              style={{
                maskImage: 'url(/hero-mask.svg)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: 'url(/hero-mask.svg)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
            >
              <img
                src={doctorImage}
                alt="Healthcare professionals"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-main/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-main/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </Section>
  );
};
