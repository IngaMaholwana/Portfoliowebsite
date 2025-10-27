import React from 'react';
import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
  targetBlank?: boolean;
}

function Link({ className, children, targetBlank, ...props }: LinkProps) {
  const defaultClasses = "text-primary hover:bg-primary/10 underline outline-none focus:bg-primary/10 transition-colors";
  const mergedClasses = cn(defaultClasses, className);

  const targetProps = targetBlank ? { target: '_blank', rel: 'noreferrer' } : {};

  return (
    <a className={mergedClasses} {...targetProps} {...props}>
      {children}
    </a>
  );
}

export default Link;
