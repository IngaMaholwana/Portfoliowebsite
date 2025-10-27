import React from 'react';
import { cn } from '@/lib/utils';

interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

function Text({ as: TextTag = 'p', className, children }: TextProps) {
  const defaultClasses = "break-words";
  const mergedClasses = cn(defaultClasses, className);

  return (
    <TextTag className={mergedClasses}>
      {children}
    </TextTag>
  );
}

export default Text;
