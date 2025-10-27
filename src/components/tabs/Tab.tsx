import { X } from 'lucide-react';
import File from './File';
import useTabContext from '../../hooks/useTabContext';
import { Tab as TabType } from '../../contexts/TabContext';
import { cn } from '@/lib/utils';

interface TabProps {
  tab: TabType;
}

function Tab({ tab }: TabProps) {
  const tabs = useTabContext();
  const selected = tabs.current?.name === tab.name;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    tabs.removeTab(tab);
  };

  return (
    <div
      className={cn(
        "relative min-w-[160px] px-4 h-full flex items-center border-t-2 border-transparent transition-colors",
        selected 
          ? "border-t-primary bg-sidebar-accent" 
          : "bg-sidebar hover:bg-sidebar-accent/50"
      )}
      data-tab={tab.name}
    >
      <button 
        onClick={() => tabs.switchTabs(tab)} 
        className="absolute inset-0 outline-none"
        aria-label={`Switch to ${tab.name}`}
      />
      <File name={tab.name} extension={tab.extension} />
      <button 
        onClick={handleClose} 
        className="z-10 ml-2 p-1 rounded hover:bg-sidebar-accent active:bg-sidebar outline-none"
        aria-label={`Close ${tab.name}`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Tab;
