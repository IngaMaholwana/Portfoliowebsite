import React from 'react';
import { Link } from 'react-router-dom';

interface TabLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

function TabLink({ to, className, children }: TabLinkProps) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default TabLink;
