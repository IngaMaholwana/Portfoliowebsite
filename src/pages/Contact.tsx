import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-muted-foreground font-mono text-sm mb-4">
          <span className="text-code-comment">// Get in touch</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Let's Chat
        </h1>
        <p className="text-foreground/80 max-w-2xl">
          I'm always open to discussing new projects, creative ideas, or opportunities to
          be part of your vision. Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 card-shadow bg-gradient-card hover:scale-[1.02] transition-transform">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-primary">Email</h3>
              <p className="text-muted-foreground mb-3">
                Drop me a line anytime
              </p>
              <a href="mailto:inga@example.com">
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6 card-shadow bg-gradient-card hover:scale-[1.02] transition-transform">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-primary">LinkedIn</h3>
              <p className="text-muted-foreground mb-3">
                Let's connect professionally
              </p>
              <a
                href="https://linkedin.com/in/ingamaholwana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6 card-shadow bg-gradient-card hover:scale-[1.02] transition-transform">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-primary">GitHub</h3>
              <p className="text-muted-foreground mb-3">
                Check out my code
              </p>
              <a
                href="https://github.com/ingamaholwana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  View GitHub
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6 card-shadow bg-gradient-card hover:scale-[1.02] transition-transform">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-primary">Location</h3>
              <p className="text-muted-foreground mb-3">
                Based in South Africa 🇿🇦
              </p>
              <span className="text-sm text-foreground/60">
                Open to remote opportunities
              </span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-8 card-shadow bg-gradient-card text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Looking for a Developer?
        </h2>
        <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
          I'm currently available for freelance work and full-time opportunities.
          Let's build something amazing together!
        </p>
        <a href="mailto:inga@example.com">
          <Button size="lg" className="gap-2">
            <Mail className="h-5 w-5" />
            Start a Conversation
          </Button>
        </a>
      </Card>
    </div>
  );
};

export default Contact;
