import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

function Section({ className, children }: SectionProps) {
  const defaultClasses = "space-y-3 mb-8";
  const mergedClasses = cn(defaultClasses, className);

  return (
    <div className={mergedClasses}>
      {children}
    </div>
  );
}

export default Section;
