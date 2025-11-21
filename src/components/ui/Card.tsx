import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-card shadow-card p-8',
        hover && 'transition-transform duration-300 hover:-translate-y-2',
        className
      )}
    >
      {children}
    </div>
  );
};
