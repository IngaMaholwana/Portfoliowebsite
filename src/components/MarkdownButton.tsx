import React from 'react';
import { cn } from '@/lib/utils';

interface MarkdownButtonAsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
  children: React.ReactNode;
  className?: string;
}

interface MarkdownButtonAsAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a';
  children: React.ReactNode;
  className?: string;
}

type MarkdownButtonProps = MarkdownButtonAsButtonProps | MarkdownButtonAsAnchorProps;

function MarkdownButton({ as: Component = 'button', children, className, ...props }: MarkdownButtonProps) {
  const defaultClasses = 'font-bold text-code-function hover:bg-primary/10 outline-none focus:bg-primary/10 transition-colors px-3 py-2';
  const mergedClasses = cn(defaultClasses, className);

  return (
    <Component className={mergedClasses} {...props as any}>
      {children}
    </Component>
  );
}

export default MarkdownButton;
