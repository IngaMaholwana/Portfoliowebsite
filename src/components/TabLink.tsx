import React from 'react';
import useTabContext from '@/hooks/useTabContext';
import { Tab } from '@/contexts/TabContext';

interface TabLinkProps {
  tab?: Tab;
  to?: string;
  className?: string;
  children: React.ReactNode;
}

function TabLink({ tab, to, className, children }: TabLinkProps) {
  const tabs = useTabContext();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (tab) {
      tabs.addTab(tab);
    }
  };

  return (
    <a href={to || tab?.path || '#'} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default TabLink;
