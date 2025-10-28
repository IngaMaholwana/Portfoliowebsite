import MarkdownHeader from '@/components/MarkdownHeader';
import LineBreak from '@/components/LineBreak';
import Section from '@/components/Section';
import Text from '@/components/Text';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  },
  {
    title: "Data Analysis Project",
    url: "https://public.tableau.com/shared/RMHQTP87S",
    description: "Interactive data visualization and analysis"
  },
  {
    title: "TikTok Project 2025",
    url: "https://public.tableau.com/views/Tiktokproject2025/Story1",
    description: "TikTok data analysis and storytelling dashboard"
  }
];

const excelProjects = [
  {
    title: "Personal Monthly Expenditure Analysis",
    file: "/data/Personal_Monthly_Expenditure.csv",
    description: "Comprehensive analysis of monthly expenses across multiple categories with statistical summaries"
  },
  {
    title: "Car Sales Dashboard (Kaggle)",
    file: "/data/Car_Sales_Kaggle_Dashboard.xlsx",
    description: "Interactive dashboard analyzing car sales data with trends and insights"
  },
  {
    title: "Car Sales Visualization",
    file: "/data/Car_Sales_Visualisation.xlsx",
    description: "Visual analysis of car sales performance metrics"
  },
  {
    title: "Montgomery Fleet Equipment Inventory (Part 1)",
    file: "/data/Montgomery_Fleet_Equipment_Inventory_Part1.xlsx",
    description: "Analysis of fleet equipment inventory by department"
  },
  {
    title: "Montgomery Fleet Equipment Inventory (Part 2)",
    file: "/data/Montgomery_Fleet_Equipment_Inventory_Part2.xlsx",
    description: "Continued analysis of fleet equipment inventory data"
  },
  {
    title: "Customer Demographics & Sales Analysis",
    file: "/data/Customer_demographics_and_sales.csv",
    description: "Comprehensive customer behavior and sales data analysis"
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

      <Section className="mt-16">
        <MarkdownHeader headingLevel={2} text="Excel Data Analysis Projects" className="text-2xl md:text-4xl" />
        <LineBreak />
        <Text>
          Data analysis projects completed using Microsoft Excel, featuring advanced formulas, pivot tables, and statistical analysis.
        </Text>
      </Section>

      <Section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {excelProjects.map((project, index) => (
            <div key={index} className="border border-border rounded-lg p-6 bg-card shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-foreground/80 text-sm mb-4">{project.description}</p>
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="w-full"
              >
                <a href={project.file} download className="flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download File
                </a>
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default DataVisualizations;
