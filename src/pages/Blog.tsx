import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const articles = [
  {
    title: "How to Set Up Vercel to Clone Your Private Git Repo Submodules",
    description: "A comprehensive guide on configuring Vercel to work with private Git repository submodules during the build and deployment process.",
    tags: ["Vercel", "Git", "DevOps", "Deployment"],
    url: "https://medium.com/@ingamaholwana/how-to-set-up-vercel-to-clone-your-private-git-repo-submodules-when-installing-building-your-app-d452c3d52fbb",
    date: "Medium Article"
  },
  {
    title: "A Serverless Microservices Architecture Using API Gateway, Lambda and DynamoDB",
    description: "Exploring the design and implementation of a serverless microservices architecture leveraging AWS services for scalability and efficiency.",
    tags: ["AWS", "Lambda", "DynamoDB", "API Gateway", "Serverless"],
    url: "https://medium.com/@ingamaholwana/a-serverless-microservices-architecture-using-api-gateway-lambda-and-dynamodb-319eee753207",
    date: "Medium Article"
  },
  {
    title: "Hosting a Static Website on Amazon S3",
    description: "Step-by-step guide to deploying and hosting static websites using Amazon S3, including configuration and best practices.",
    tags: ["AWS", "S3", "Static Hosting", "Web Development"],
    url: "https://medium.com/@ingamaholwana/hosting-a-static-website-on-amazon-s3-a77839d1dd03",
    date: "Medium Article"
  },
  {
    title: "AmazonQ: Developer's Helper",
    description: "An introduction to AmazonQ and how it assists developers in their workflow, improving productivity and code quality.",
    tags: ["AWS", "AI", "Developer Tools", "Productivity"],
    url: "https://medium.com/@ingamaholwana/amazonq-developers-helper-be1618e60c0f",
    date: "Medium Article"
  },
  {
    title: "AWS Continuous Integration & Continuous Delivery",
    description: "Understanding CI/CD pipelines on AWS, implementing automated testing, building, and deployment workflows for modern applications.",
    tags: ["AWS", "CI/CD", "DevOps", "Automation"],
    url: "https://medium.com/@ingamaholwana/aws-continuos-integration-continuous-delivery-4290eb5c4a02",
    date: "Medium Article"
  },
];

export default function Blog() {
  return (
    <div className="container max-w-6xl py-12 space-y-12">
      <div className="space-y-4">
        <p className="text-sm text-code-comment font-mono">
          <span className="text-code-comment">// Technical writing</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Blog & Articles
        </h1>
        <p className="text-foreground/80 max-w-2xl">
          Technical articles and tutorials I've written on{" "}
          <a href="https://medium.com/@ingamaholwana" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Medium
          </a>
          {" "}covering cloud architecture, DevOps, and software development best practices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
              <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.date}</p>
              </div>
            </div>
            
            <p className="text-foreground/70">{article.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="sm" className="gap-2 w-full">
                  <ExternalLink className="h-4 w-4" />
                  Read on Medium
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
