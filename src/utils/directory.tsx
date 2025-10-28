import { Home, User, Briefcase, Award, Mail, BarChart3, BookOpen } from "lucide-react";
import { Tab } from "@/contexts/TabContext";

export const navItems: Tab[] = [
  { name: "Home", path: "/", extension: "js", icon: Home },
  { name: "About", path: "/about", extension: "js", icon: User },
  { name: "Portfolio", path: "/portfolio", extension: "js", icon: Briefcase },
  { name: "Data Visualisations", path: "/data-visualisations", extension: "tsx", icon: BarChart3 },
  { name: "Blog", path: "/blog", extension: "md", icon: BookOpen },
  { name: "Certifications", path: "/certifications", extension: "tsx", icon: Award },
  { name: "Contact", path: "/contact", extension: "md", icon: Mail },
];
