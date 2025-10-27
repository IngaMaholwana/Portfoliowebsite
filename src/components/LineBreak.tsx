import React from 'react';
import { cn } from '@/lib/utils';

interface LineBreakProps {
  className?: string;
}

function LineBreak({ className }: LineBreakProps) {
  const defaultClasses = "border-border my-3";
  const mergedClasses = cn(defaultClasses, className);

  return (
    <hr className={mergedClasses} />
  );
}

export default LineBreak;
