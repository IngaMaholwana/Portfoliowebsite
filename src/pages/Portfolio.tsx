import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React and Ruby on Rails",
    tags: ["React", "Ruby on Rails", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Interactive developer portfolio with VS Code theme",
    tags: ["React", "Tailwind CSS", "Vite"],
    github: "#",
    demo: "#",
  },
  {
    title: "API Gateway",
    description: "Microservices API gateway with authentication and rate limiting",
    tags: ["Python", "FastAPI", "Redis"],
    github: "#",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-muted-foreground font-mono text-sm mb-4">
          <span className="text-code-comment">// My work</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Prior Work
        </h1>
        <p className="text-foreground/80 max-w-2xl">
          Here are some of the projects I've worked on. Each project represents a unique
          challenge and learning opportunity in my development journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="p-6 card-shadow bg-gradient-card hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">
              {project.title}
            </h3>
            <p className="text-foreground/80 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary rounded text-xs text-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
