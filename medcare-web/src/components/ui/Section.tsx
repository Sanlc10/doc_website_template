import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'alt';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = 'default'
}) => {
  const bgColors = {
    default: 'bg-background-default',
    alt: 'bg-background-alt',
  };

  return (
    <section className={cn('py-section', bgColors[background], className)}>
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
