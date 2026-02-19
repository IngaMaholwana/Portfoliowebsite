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
        <Text>Welcome! My name is Inga Maholwana. I am a full stack software engineer and Wethink alumni</Text>
        <Text>I began my career as a Data Analyst Associate, where I earned my
          CompTIA Data+ certification and worked within SAP environments.
          I developed data pipelines using Python and SQL, and built
          analytical dashboards using Tableau, Excel, and Power BI to
          transform raw data into actionable insights.
           
        </Text>
        <Text>
          I later transitioned into software engineering at a Cape Town
          startup, working in a lean team where ownership and output are
          highly visible. My work spans database design, backend architecture,
          REST API development, and self-hosted infrastructure deployment.
          I actively build and maintain full-stack systems from database
          schema design to production environments.
        </Text>
        <Text>  
          I am a dedicated builder and lifelong learner with a strong grasp of
          application architecture, system design principles, and software
          craftsmanship. I specialize in translating ideas into polished,
          functional products. For some examples of recent work, see <TabLink tab={portfolioTab} className="font-bold text-code-function hover:underline">Portfolio.js</TabLink>.
        </Text>
        <Text>For information on how to reach out, see <TabLink tab={contactTab} className="font-bold text-code-function hover:underline">Contact.md</TabLink>.</Text>
      </Section>

      <Section>
        <MarkdownButton
          as="a"
  href={`${import.meta.env.BASE_URL}documents/Maholwana_Inga_Resume.pdf`}
  download
>[Download Resume]
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
          <span className="font-bold text-primary">Hosting platforms:</span> AWS, Azure, Google cloud platform, Coolify, Railway, Supabase, Firebase, CI/CD Pipeline
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
