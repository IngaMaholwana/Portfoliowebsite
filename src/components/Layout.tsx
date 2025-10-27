import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Award, Mail, Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home.tsx", icon: Home },
  { path: "/about", label: "About.tsx", icon: User },
  { path: "/portfolio", label: "Portfolio.tsx", icon: Briefcase },
  { path: "/certifications", label: "Certifications.tsx", icon: Award },
  { path: "/contact", label: "Contact.tsx", icon: Mail },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <header className="h-12 bg-sidebar border-b border-sidebar-border flex items-center px-4 gap-4">
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
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                              isActive
                                ? "bg-sidebar-accent text-primary"
                                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </Link>
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
          <div className="max-w-6xl mx-auto p-8">
            {children}
          </div>
        </main>
      </div>

      {/* Status Bar */}
      <footer className="h-6 bg-primary text-primary-foreground text-xs flex items-center justify-between px-4">
        <span>Full Stack Software Engineer</span>
        <span>UTF-8 | TypeScript JSX</span>
      </footer>
    </div>
  );
};
