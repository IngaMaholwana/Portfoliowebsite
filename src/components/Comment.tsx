import React from 'react';
import { cn } from '@/lib/utils';
import Text from './Text';

interface CommentProps {
  className?: string;
  children: React.ReactNode;
}

function Comment({ className, children, ...props }: CommentProps) {
  const mergedClasses = cn("text-code-comment", className);

  return (
    <Text className={mergedClasses} {...props}>
      {children}
    </Text>
  );
}

export default Comment;
