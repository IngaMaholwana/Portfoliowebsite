import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="space-y-8 max-w-3xl">
        <div className="space-y-4">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-code-comment">// Welcome to my portfolio</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-foreground">Bhotani mawethu. </span>
            <span className="text-gradient">I am Inga!</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            A Full Stack Software Engineer from{" "}
            <span className="text-primary font-semibold">South Africa 🇿🇦</span>
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-foreground/90">
            Experienced using <span className="text-code-keyword">Ruby</span>,{" "}
            <span className="text-code-function">Ruby on Rails</span>,{" "}
            <span className="text-code-variable">Python</span>,{" "}
            <span className="text-code-string">Java</span>,{" "}
            <span className="text-code-keyword">JavaScript</span>,{" "}
            <span className="text-primary">React</span>, and more!
          </p>
          <p className="text-muted-foreground">
            This website, inspired by VS Code, is an interactive overview of who I am
            and some of the things that I've built. I encourage visitors to click around
            and explore (the sidebar and tabs are fully functioning).
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link to="/portfolio">
            <Button size="lg" className="group">
              View My Work
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/certifications">
            <Button size="lg" variant="outline">
              View Certifications
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get In Touch
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/ingamaholwana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/ingamaholwana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:inga@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
