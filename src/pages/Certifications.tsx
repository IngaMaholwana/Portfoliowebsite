import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, ExternalLink, FileText } from "lucide-react";

const certifications = [
  {
    title: "CompTIA Data+",
    issuer: "CompTIA",
    date: "2024",
    credlyUrl: "https://www.credly.com/badges/your-badge-id",
    pdfUrl: "/documents/CompTIA_Data_ce_certificate.pdf",
    description: "Data analysis, visualization, and statistical fundamentals",
  },
  {
    title: "FNB App Academy Fullstack Development",
    issuer: "FNB App Academy",
    date: "2025",
    pdfUrl: "/documents/FNB_App_Academy_Fullstack_Certificate.pdf",
    description: "Comprehensive fullstack software development certification",
  },
];

const Certifications = () => {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-muted-foreground font-mono text-sm mb-4">
          <span className="text-code-comment">// Professional credentials</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Certifications & Credentials
        </h1>
        <p className="text-foreground/80 max-w-2xl">
          Here are my professional certifications, diplomas, and verified credentials. Each
          represents a commitment to continuous learning and professional development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {certifications.map((cert) => (
          <Card
            key={cert.title}
            className="p-6 card-shadow bg-gradient-card hover:glow transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-primary">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {cert.issuer}
                  </span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>
                <p className="text-foreground/80 mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-3">
                  {cert.credlyUrl && (
                    <a href={cert.credlyUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View on Credly
                      </Button>
                    </a>
                  )}
                  {cert.pdfUrl && (
                    <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 card-shadow bg-gradient-card border-primary/20">
        <div className="flex items-start gap-4">
          <Award className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">
              How to Add Your Certificates
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary">1.</span>
                <span>
                  Upload your PDF certificates and update the <code className="text-code-keyword">pdfUrl</code> fields
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">2.</span>
                <span>
                  Add your Credly badge URLs by copying them from your Credly profile
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">3.</span>
                <span>
                  Update the certification details in <code className="text-code-function">src/pages/Certifications.tsx</code>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Certifications;
