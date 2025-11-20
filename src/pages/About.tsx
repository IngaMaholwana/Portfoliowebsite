import MarkdownHeader from '@/components/MarkdownHeader';
import LineBreak from '@/components/LineBreak';
import Section from '@/components/Section';
import Text from '@/components/Text';
import MarkdownButton from '@/components/MarkdownButton';
import Comment from '@/components/Comment';
import TabLink from '@/components/TabLink';
import { navItems } from '@/utils/directory';

const About = () => {
  const portfolioTab = navItems.find(item => item.path === '/portfolio');
  const contactTab = navItems.find(item => item.path === '/contact');
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel={1} text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Hi! My name is Inga Maholwana. I am a full stack software engineer and Wethink alumni</Text>
        <Text>Based in Cape Town the aka mother city started my in world experience in the Tech sector by being a data analyst associate in that role obtained my comptia Data plus certication worked with SAP environment, visuals with tablea and excel powerBI worked on python and SQL development cleaning data visualising it and so moved to being 
          a software development intern in a small start here in Cape Town and all the skills I claim in my resume are being put to the test actively every single day being in a very small team when not working its very obvious so my time is being used effectively from building database management systems, Api development self hosting systems etc. 
          I am a dedicated builder and lifelong learner, constantly honing my skills. 
          I have a strong grasp of application architecture and specialise in implementing a clear vision from concept to a polished, functional product. 
          For some examples of recent work, see <TabLink tab={portfolioTab} className="font-bold text-code-function hover:underline">Portfolio.js</TabLink>.
        </Text>
        <Text>For information on how to reach out, see <TabLink tab={contactTab} className="font-bold text-code-function hover:underline">Contact.md</TabLink>.</Text>
      </Section>

      <Section>
        <MarkdownButton as="a" href={`${import.meta.env.BASE_URL}documents/Maholwana_Inga_Resume.pdf`} target="_blank" rel="noreferrer">
          [Download Resume]
        </MarkdownButton>
      </Section>

      <Section>
        <MarkdownHeader headingLevel={2} text="Technologies" className="text-xl md:text-3xl" />
        <LineBreak />
        <Comment>
          These are the the frameworks and programming languages that I use or have used to achieve my objectives. I am open to working with and learning new skills!
        </Comment>
        <Text>
          <span className="font-bold text-primary">Languages and Frameworks:</span> Ruby, Laravel, Prisma, Drizzle, Ruby on Rails, 
          Python, Java, GraphQL, R, SQL, React, C#, C++, JavaScript, HTML, CSS, TypeScript, Node.js, Express.js, Next.js, Tailwind CSS, Bootstrap
        </Text>
        <Text>
          <span className="font-bold text-primary">Databases:</span> PostgreSQL, MySQL, MongoDB, SQLite, Supabase
        </Text>
        <Text>
          <span className="font-bold text-primary">Hosting platforms:</span> AWS, Azure, Google cloud platform, Coolify, Railway, Supabase, Firebase
        </Text>
        <Text>
          <span className="font-bold text-primary">Miscellaneous:</span> Git, Webpack, Object-Oriented Programming and Design, Test-Driven Development, 
          Data Structures and Algorithms, Full Stack Web Development, REST APIs, Amazon S3, Azure, Docker, Figma, Agile Methodologies
        </Text>
      </Section>
    </div>
  );
};

export default About;
