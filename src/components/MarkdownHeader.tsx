import React from 'react';
import { cn } from '@/lib/utils';

interface MarkdownHeaderProps {
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  text: string;
}

function MarkdownHeader({ headingLevel, className, text }: MarkdownHeaderProps) {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  const defaultClasses = "text-primary";
  const mergedClasses = cn(defaultClasses, className);

  return (
    <Tag className={mergedClasses}>
      {`${"#".repeat(headingLevel)} ${text}`}
    </Tag>
  );
}

export default MarkdownHeader;
