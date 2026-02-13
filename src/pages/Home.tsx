import Section from '@/components/Section';
import Text from '@/components/Text';
import LineBreak from '@/components/LineBreak';
import TabLink from '@/components/TabLink';
import Link from '@/components/Link';
import { navItems } from '@/utils/directory';

const Home = () => {
  const aboutTab = navItems.find(item => item.path === '/about');
  const portfolioTab = navItems.find(item => item.path === '/portfolio');
  const contactTab = navItems.find(item => item.path === '/contact');

  return (
    <div>
      <Section>
        <h1 className="text-5xl mb-3">
          Bhotani. I am <span className="text-primary">Inga</span>!
        </h1>
        <h2 className='text-3xl'>
          Full Stack Software Engineer | Cape Town, South Africa 🇿🇦
          <span className="animate-blink ml-1">|</span>
        </h2>
        <LineBreak />
      </Section>

      <Section>
        <Text>
          Welcome to my workspace. I build scalable full-stack applications using modern technologies 
          like TypeScript, React, Node.js, PostgreSQL, and cloud platforms. 
          I specialize in backend architecture, API design, and deploying 
          production-ready systems.
          
          This portfolio is a hands-on experience modeled 
          after <Link targetBlank href="https://code.visualstudio.com/">VS Code</Link>—the 
          tabs and sidebar are fully functional with easter eggs sprinkled in 🎇🎆 🐣 🎇🎆.
        </Text>
        <Text>
          Explore my work, technical background, and engineering philosophy
          using the navigation below.
        </Text>
      </Section>
      
      <Section className="space-y-2">
        <h3 className="text-2xl font-bold mb-3">
          Helpful Links
        </h3>
        <div>
          <TabLink tab={aboutTab} className="text-primary font-normal hover:underline">About</TabLink>
          <span className="ml-5">~/background_information</span>
        </div>
        <div>
          <TabLink tab={portfolioTab} className="text-primary font-normal hover:underline">Portfolio</TabLink>
          <span className="ml-5">~/prior_work</span>
        </div>
        <div>
          <TabLink tab={contactTab} className="text-primary font-normal hover:underline">Contact</TabLink>
          <span className="ml-5">~/lets_chat</span>
        </div>
      </Section>
    </div>
  );
};

export default Home;
