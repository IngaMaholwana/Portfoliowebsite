import Section from '@/components/Section';
import Text from '@/components/Text';
import LineBreak from '@/components/LineBreak';
import TabLink from '@/components/TabLink';
import Link from '@/components/Link';

const Home = () => {
  return (
    <div>
      <Section>
        <h1 className="text-5xl mb-3">
          Bhotani mawethu. I am <span className="text-primary">Inga</span>!
        </h1>
        <h2 className='text-3xl'>
          A Full Stack Software Engineer from South Africa 🇿🇦 
          <span className="animate-blink ml-1">|</span>
        </h2>
        <LineBreak />
      </Section>

      <Section>
        <Text>
          Welcome to my workspace. This portfolio is a hands-on experience modeled 
          after <Link targetBlank href="https://code.visualstudio.com/">VS Code</Link>—the 
          tabs and sidebar are fully functional with easter eggs sprinkled in 🎇🎆 🐣 🎇🎆.
        </Text>
        <Text>
          For more information on my background and previous work, check out some of the helpful links below! 
          Use them to navigate my work as a Full Stack Engineer. You'll find 
          projects showcasing my skills and experience.
        </Text>
      </Section>
      
      <Section className="space-y-2">
        <h3 className="text-2xl font-bold mb-3">
          Helpful Links
        </h3>
        <div>
          <TabLink to="/about" className="text-primary font-normal hover:underline">About</TabLink>
          <span className="ml-5">~/background_information</span>
        </div>
        <div>
          <TabLink to="/portfolio" className="text-primary font-normal hover:underline">Portfolio</TabLink>
          <span className="ml-5">~/prior_work</span>
        </div>
        <div>
          <TabLink to="/contact" className="text-primary font-normal hover:underline">Contact</TabLink>
          <span className="ml-5">~/lets_chat</span>
        </div>
      </Section>
    </div>
  );
};

export default Home;
