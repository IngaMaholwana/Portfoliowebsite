import MarkdownHeader from '@/components/MarkdownHeader';
import LineBreak from '@/components/LineBreak';
import Section from '@/components/Section';
import Text from '@/components/Text';
import Link from '@/components/Link';

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

      <Section>
        <Text className="text-lg">
          [<span className="text-pink">Email</span>] (<Link targetBlank href="mailto:ingamaholwana@gmail.com">mailto:ingamaholwana@gmail.com</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Github</span>] (<Link targetBlank href="https://github.com/IngaMaholwana">https://github.com/IngaMaholwana</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">LinkedIn</span>] (<Link targetBlank href="https://www.linkedin.com/in/inga-maholwana/">https://www.linkedin.com/in/inga-maholwana/</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Medium</span>] (<Link targetBlank href="https://medium.com/@ingamaholwana">https://medium.com/@ingamaholwana</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Public Tableau</span>] (<Link targetBlank href="https://public.tableau.com/app/profile/inga.maholwana/vizzes">https://public.tableau.com/app/profile/inga.maholwana/vizzes</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Figma</span>] (<Link targetBlank href="https://www.figma.com/@ingamaholwana">https://www.figma.com/@ingamaholwana</Link>)
        </Text>
      </Section>
    </div>
  );
};

export default Contact;
