import MarkdownHeader from '@/components/MarkdownHeader';
import LineBreak from '@/components/LineBreak';
import Section from '@/components/Section';
import Text from '@/components/Text';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, FileText, BarChart3, Figma } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:ingamaholwana@gmail.com',
    icon: Mail,
  },
  {
    name: 'Github',
    href: 'https://github.com/IngaMaholwana',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/inga-maholwana/',
    icon: Linkedin,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@ingamaholwana',
    icon: FileText,
  },
  {
    name: 'Public Tableau',
    href: 'https://public.tableau.com/app/profile/inga.maholwana/vizzes',
    icon: BarChart3,
  },
  {
    name: 'Figma',
    href: 'https://www.figma.com/@inga45',
    icon: Figma,
  },
];

const Contact = () => {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel={1} text="Contact" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          If you're interested in reaching out and want to chat, please just reach out via any of the links below!
        </Text>
      </Section>

      <Section className="space-y-3">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full justify-start gap-3 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-300"
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </Button>
            </a>
          );
        })}
      </Section>
    </div>
  );
};

export default Contact;
