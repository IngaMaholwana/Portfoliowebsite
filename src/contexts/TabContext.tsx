import { createContext } from 'react';

export interface Tab {
  name: string;
  path: string;
  extension: string;
  icon: any;
}

export interface TabContextType {
  current: Tab | null;
  tabList: Tab[];
  addTab: (tab: Tab) => void;
  removeTab: (tab: Tab) => void;
  switchTabs: (tab: Tab) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export default TabContext;
