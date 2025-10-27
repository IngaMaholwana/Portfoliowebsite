import { useEffect, useRef } from 'react';
import Tab from './Tab';
import useTabContext from '../../hooks/useTabContext';

function TabBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabs = useTabContext();
  const selectedTab = tabs.current ? tabs.current.name : null;

  useEffect(() => {
    if (selectedTab && scrollRef.current) {
      const tab = scrollRef.current.querySelector(`[data-tab="${selectedTab}"]`);
      tab?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedTab]);

  if (tabs.tabList.length < 1) return null;

  return (
    <div 
      ref={scrollRef} 
      className="bg-sidebar flex font-medium h-12 grow select-none overflow-x-auto scrollbar-hide"
    >
      {tabs.tabList.map((tab) => (
        <Tab tab={tab} key={tab.name} />
      ))}
    </div>
  );
}

export default TabBar;
