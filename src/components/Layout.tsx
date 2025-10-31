import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import JSConfetti from 'js-confetti';
import TabBar from "./tabs/TabBar";
import useTabContext from "@/hooks/useTabContext";
import { navItems } from "@/utils/directory";
import WelcomeScreen from "./WelcomeScreen";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const tabs = useTabContext();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Add current page to tabs when location changes
  useEffect(() => {
    const currentNav = navItems.find(item => item.path === location.pathname);
    if (currentNav) {
      tabs.addTab(currentNav);
    }
  }, [location.pathname]);

  // Easter egg: Ctrl+Shift+K for fireworks!
  useEffect(() => {
    const keyboardShortcuts = (e: KeyboardEvent) => {
      if (e.key === 'b' && e.ctrlKey) {
        e.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }

      if (e.key === 'k' && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({ 
          confettiColors: ['hsl(var(--primary))', 'hsl(var(--code-function))', 'hsl(var(--code-keyword))', 'hsl(var(--code-string))', 'hsl(var(--code-variable))'] 
        });
      }
    };

    window.addEventListener('keydown', keyboardShortcuts);

    return () => window.removeEventListener('keydown', keyboardShortcuts);
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Bar with Tabs */}
      <header className="bg-sidebar border-b border-sidebar-border">
        <div className="h-12 flex items-center px-4 gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Inga Maholwana</span>
          </div>
        </div>
        <TabBar />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xs uppercase text-muted-foreground mb-2 font-semibold">
                Explorer
              </h2>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                  <span>▼</span>
                  <span>portfolio</span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                    <span>▼</span>
                    <span>src</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    <div className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                      <span>▼</span>
                      <span>components</span>
                    </div>
                    <nav className="ml-4 space-y-1">
                      {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                          <button
                            key={item.path}
                            onClick={() => tabs.addTab(item)}
                            className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                              isActive
                                ? "bg-sidebar-accent text-primary"
                                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{item.name}.{item.extension}</span>
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {tabs.tabList.length === 0 ? (
            <WelcomeScreen />
          ) : (
            <div className="max-w-6xl mx-auto p-8">
              {children}
            </div>
          )}
        </main>
      </div>

      {/* Status Bar */}
      <footer className="h-6 bg-primary text-primary-foreground text-xs flex items-center justify-between px-4">
        <span>Full Stack Software Engineer INGA MAHOLWANA</span>
        <span>UTF-8 | TypeScript JSX</span>
      </footer>
    </div>
  );
};
