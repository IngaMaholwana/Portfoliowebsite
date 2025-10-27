import { Card } from "@/components/ui/card";

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Ruby", "Java"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Ruby on Rails", "Node.js", "Express", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "VS Code", "Linux"] },
];

const About = () => {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-muted-foreground font-mono text-sm mb-4">
          <span className="text-code-comment">// About me</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Background Information
        </h1>
      </div>

      <div className="space-y-6">
        <Card className="p-6 card-shadow bg-gradient-card">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h2>
          <div className="space-y-4 text-foreground/90">
            <p>
              I'm a passionate Full Stack Software Engineer based in South Africa with a
              strong foundation in both frontend and backend technologies. My journey in
              software development has been driven by curiosity and a desire to create
              meaningful solutions.
            </p>
            <p>
              With experience across multiple programming languages and frameworks, I enjoy
              tackling complex problems and building scalable applications that make a
              difference.
            </p>
          </div>
        </Card>

        <Card className="p-6 card-shadow bg-gradient-card">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h3 className="text-lg font-semibold mb-3 text-code-function">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-secondary rounded text-sm text-foreground border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 card-shadow bg-gradient-card">
          <h2 className="text-2xl font-semibold mb-4 text-primary">What I Do</h2>
          <ul className="space-y-3 text-foreground/90">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Build responsive and interactive web applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Design and implement RESTful APIs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Work with databases and cloud services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Collaborate with teams to deliver quality software</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About;
