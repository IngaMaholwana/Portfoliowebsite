import { useState, useMemo, useCallback, ReactNode } from 'react';
import TabContext, { Tab } from './TabContext';
import { useNavigate } from 'react-router-dom';

interface TabProviderProps {
  initialTabs: Tab[];
  children: ReactNode;
}

function TabProvider({ initialTabs, children }: TabProviderProps) {
  const [tabHistory, setTabHistory] = useState<Tab[]>(initialTabs);
  const [tabList, setTabList] = useState<Tab[]>(initialTabs);
  const navigate = useNavigate();

  // Check if tab is already open, if not add it
  // Then switch to that tab
  const addTab = useCallback((tab: Tab) => {
    if (!tabList.find(t => t.name === tab.name)) {
      setTabList(prev => [...prev, tab]);
    }
    switchTabs(tab);
  }, [tabList]);

  // Remove tab from tab list and tab history
  const removeTab = useCallback((tab: Tab) => {
    setTabList(prev => prev.filter(t => t.name !== tab.name));
    setTabHistory(prev => {
      const newHistory = prev.filter(t => t.name !== tab.name);
      // If we're removing the current tab, switch to the next one
      if (prev[0]?.name === tab.name && newHistory.length > 0) {
        navigate(newHistory[0].path);
      }
      return newHistory;
    });
  }, [navigate]);

  // Switch to a tab and navigate
  const switchTabs = useCallback((tab: Tab) => {
    navigate(tab.path);
    setTabHistory(prev => [tab, ...prev.filter(t => t.name !== tab.name)]);
  }, [navigate]);

  const value = useMemo(() => ({
    current: tabHistory[0] || null,
    tabList,
    addTab,
    removeTab,
    switchTabs
  }), [tabList, tabHistory, addTab, removeTab, switchTabs]);

  return (
    <TabContext.Provider value={value}>
      {children}
    </TabContext.Provider>
  );
}

export default TabProvider;
