import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Ugrandjojo",
    description: "VS Code extension developed for Microsoft South Africa AI for Good hackathon that uses AI to help users deal with imposter syndrome. Features 4 sprites with different personalities, can read code and provide feedback.",
    tags: ["TypeScript", "JavaScript", "Azure", "OpenAI API"],
    github: "https://github.com/IngaMaholwana/ugrandjojo",
    demo: undefined,
  },
  {
    title: "LineOfThought",
    description: "A minimalist social media app where every post is a single, impactful line. Users can share their thoughts, experiences, or goals whilst keeping each post to a short line of text—no more than 100 characters.",
    tags: ["Ruby on Rails", "PostgreSQL", "Devise", "RSpec"],
    github: "https://github.com/IngaMaholwana/LineOfThought",
    demo: undefined,
  },
  {
    title: "BattleShip",
    description: "Event-driven Battleship game with turn-based gameplay, dynamic user interface and clear win condition.",
    tags: ["Ruby on Rails", "React", "JavaScript"],
    github: "https://github.com/IngaMaholwana/BattleShip",
    demo: "https://ingamaholwana.github.io/BattleShip/",
  },
  {
    title: "ImozuluForecast",
    description: "A modern weather application that provides current conditions and 5-day forecasts for any location worldwide. Features location-based weather search and dual temperature scale support.",
    tags: ["JavaScript", "HTML", "CSS", "Weather API"],
    github: "https://github.com/IngaMaholwana/ImozuluForecast",
    demo: "https://ingamaholwana.github.io/ImozuluForecast/",
  },
  {
    title: "LeadsExtension",
    description: "Chrome browser extension for managing and tracking leads. Built to practise and sharpen skills in developing browser extensions with persistent storage.",
    tags: ["JavaScript", "Chrome API", "Browser Extension"],
    github: "https://github.com/IngaMaholwana/LeadsExtension",
    demo: "https://chrome.google.com/webstore/detail/LeadsExtension/mlllpfgnclcmalipccdgkpbaamhpajcm",
  },
  {
    title: "LeadsMobile",
    description: "Progressive web application demonstrating how Web API implementations of JavaScript can be used to create mobile app-like experiences in the browser.",
    tags: ["JavaScript", "PWA", "Web APIs"],
    github: "https://github.com/IngaMaholwana/LeadsMobile",
    demo: "https://leads-mobile.netlify.app/",
  },
  {
    title: "Cyclic Case Study",
    description: "Dashboard developed in RStudio (Posit Cloud) from bike shop rental data to help gain more customers from casual users.",
    tags: ["R", "CSV", "Data Analysis"],
    github: "https://github.com/IngaMaholwana/Cyclic-data-case-study",
    demo: "https://posit.cloud/content/10491857",
  },
  {
    title: "FastAPI Authentication Service",
    description: "Full-stack authentication and authorisation service using FastAPI with JWT-based authentication, secure password hashing and storage for modern web applications.",
    tags: ["Python", "FastAPI", "JWT", "PostgreSQL"],
    github: "https://github.com/IngaMaholwana/fastapi-authentication-service",
    demo: undefined,
  },
  {
    title: "FullChessRuby",
    description: "Fully developed command-line chess game using Ruby with move selection/viewing and save/load game capabilities.",
    tags: ["Ruby", "CLI", "Game Development"],
    github: "https://github.com/IngaMaholwana/FullChessRuby",
    demo: undefined,
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
          Personal Projects
        </h1>
        <p className="text-foreground/80 max-w-2xl">
          Below is a selection of some recent and larger projects that I have worked on. For more detail on everything that I have done, as well as what I am currently working on, check out my{" "}
          <a href="https://github.com/IngaMaholwana" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            GitHub
          </a>.
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
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
