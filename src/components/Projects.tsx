import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Shield, Database, Globe, Heart } from "lucide-react";

const projects = [
  {
    title: "CrackShield AI",
    subtitle: "The Intelligent Password Guardian",
    description: "Built a Jupyter-based tool for password strength analysis and crack time estimation using IPyWidgets for interactive UI and NewsData.io API for live cybersecurity news.",
    icon: Shield,
    technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "IPyWidgets", "HTML/CSS", "NewsData.io API"],
    features: [
      "Real-time password strength analysis",
      "Crack time estimation algorithms",
      "Interactive cybersecurity news feed",
      "User-friendly Jupyter interface"
    ],
    date: "Feb 2025",
    github: "https://github.com/Raghavgarg5541275/CrackShield-AI---The-Intelligent-Password-Guardian",
    demo: "https://github.com/Raghavgarg5541275/CrackShield-AI---The-Intelligent-Password-Guardian"
  },
  {
    title: "Zepto SQL Data Analysis",
    subtitle: "E-commerce Intelligence Platform",
    description: "Analyzed inventory data to extract insights on discounts, revenue, and product categories. Wrote optimized SQL queries for filtering, aggregation, and category grouping.",
    icon: Database,
    technologies: ["PostgreSQL", "SQL", "pgAdmin", "CSV", "Relational Schema Design"],
    features: [
      "Comprehensive inventory analysis",
      "Revenue optimization insights",
      "Category-based performance metrics",
      "Advanced SQL query optimization"
    ],
    date: "May 2024",
    github: "https://github.com/Raghavgarg5541275/zepto-SQL",
    demo: "https://github.com/Raghavgarg5541275/zepto-SQL"
  },
  {
    title: "WebWave",
    subtitle: "Full-Stack Digital Marketplace",
    description: "Developed a digital marketplace platform for websites, domains, and logos. Designed separate admin, backend, and frontend modules for scalability.",
    icon: Globe,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS", "REST APIs", "Modular Monorepo"],
    features: [
      "Multi-vendor marketplace",
      "Scalable modular architecture",
      "Admin dashboard with analytics",
      "Secure payment integration"
    ],
    date: "Aug 2024",
    github: "https://github.com/Raghavgarg5541275/WebWave",
    demo: "https://github.com/Raghavgarg5541275/WebWave"
  },
  {
    title: "HealthNet",
    subtitle: "Multi-Disease AI Predictor",
    description: "Built an adaptive ML system for predicting heart disease, diabetes, and Parkinson's. Achieved up to 92% accuracy with automated model selection across 9 classifiers.",
    icon: Heart,
    technologies: ["Python", "Scikit-learn", "XGBoost", "SVM", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Multi-disease prediction capability",
      "Automated model selection",
      "92% accuracy achievement",
      "Comprehensive health analytics"
    ],
    date: "Nov 2024",
    github: "https://github.com/Raghavgarg5541275/HealthNet-predictor",
    demo: "https://github.com/Raghavgarg5541275/HealthNet-predictor"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technologies, showcasing expertise in AI, full-stack development, and data analysis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="portfolio-card group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-primary font-medium mt-1">{project.subtitle}</p>
                      <Badge variant="secondary" className="mt-2">
                        {project.date}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="portfolio-button-primary text-sm">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="portfolio-button-secondary text-sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;