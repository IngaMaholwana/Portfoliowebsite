import MarkdownHeader from '@/components/MarkdownHeader';
import LineBreak from '@/components/LineBreak';
import Section from '@/components/Section';
import Text from '@/components/Text';
import MarkdownButton from '@/components/MarkdownButton';
import Comment from '@/components/Comment';
import TabLink from '@/components/TabLink';

const About = () => {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel={1} text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Hi! My name is Inga Maholwana. I am a full stack software engineer and Wethink alumni</Text>
        <Text>Originally on a path in law, I pivoted to software development after discovering a deep interest in coding in 2019. 
          I am a dedicated builder and lifelong learner, constantly honing my skills. 
          I have a strong grasp of application architecture and specialize in implementing a clear vision from concept to a polished, functional product. 
          For some examples of recent work, see <TabLink to="/portfolio" className="font-bold text-code-function hover:underline">Portfolio.js</TabLink>.
        </Text>
        <Text>For information on how to reach out, see <TabLink to="/contact" className="font-bold text-code-function hover:underline">Contact.md</TabLink>.</Text>
      </Section>

      <Section>
        <MarkdownButton as="a" href="/documents/Maholwana_Inga_Resume.pdf" target="_blank" rel="noreferrer">
          [Download Resume]
        </MarkdownButton>
      </Section>

      <Section>
        <MarkdownHeader headingLevel={2} text="Technologies" className="text-xl md:text-3xl" />
        <LineBreak />
        <Comment>
          While these are some of the languages I am the most comfortable with, I am constantly looking to expand my toolkit and am open to working with and learning new skills!
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
