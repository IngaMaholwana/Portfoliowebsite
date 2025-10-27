import MarkdownHeader from '@/components/MarkdownHeader';
import LineBreak from '@/components/LineBreak';
import Section from '@/components/Section';
import Text from '@/components/Text';

const tableauVizualizations = [
  {
    title: "Impact of Holiday Bikes Seoul (2017-2018)",
    url: "https://public.tableau.com/views/ImpactofholidayBikesSeoul1718/Dashboard1",
    description: "Analysis of bike rental patterns during holidays in Seoul"
  },
  {
    title: "Pollution Data (2000-2011)",
    url: "https://public.tableau.com/views/Pollutiondataforyears2000-2011/Sheet1",
    description: "Environmental pollution trends over a decade"
  }
];

const DataVisualizations = () => {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel={1} text="Data Visualizations" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          Interactive dashboards and data visualizations created with Tableau Public and R Studio.
        </Text>
      </Section>

      <Section className="space-y-8">
        {tableauVizualizations.map((viz, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">{viz.title}</h3>
            <p className="text-foreground/80 text-sm">{viz.description}</p>
            <div className="w-full border border-border rounded-lg overflow-hidden bg-card shadow-lg">
              <iframe
                src={`${viz.url}?:showVizHome=no&:embed=true&:toolbar=yes`}
                className="w-full h-[600px] md:h-[700px]"
                frameBorder="0"
                allowFullScreen
                title={viz.title}
              />
            </div>
          </div>
        ))}
      </Section>

      <Section>
        <Text className="text-sm text-muted-foreground">
          View more visualizations on my{' '}
          <a 
            href="https://public.tableau.com/app/profile/inga.maholwana/vizzes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Tableau Public profile
          </a>
        </Text>
      </Section>
    </div>
  );
};

export default DataVisualizations;
