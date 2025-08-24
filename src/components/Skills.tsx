import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Wrench, Users, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "SQL", "C/C++", "HTML/CSS"]
  },
  {
    title: "ML/DL & Frameworks",
    icon: Brain,
    skills: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost"]
  },
  {
    title: "Data Science & Analytics",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib", "Statistical Analysis", "Feature Engineering"]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["Git", "MongoDB", "REST APIs", "Three.js", "AWS"]
  }
];

const certifications = [
  {
    title: "Machine Learning A-Z",
    provider: "Udemy",
    date: "June 2024",
    icon: Brain,
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-774f9734-f62a-43c9-b42e-22a19724bd61.pdf"
  },
  {
    title: "Data Group - Data Visualisation",
    provider: "Forage",
    date: "June 2024",
    icon: Database,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_GqMKmiHW9dyy5kXco_1719342194737_completion_certificate.pdf"
  },
  {
    title: "Algorithmic Toolbox",
    provider: "University of California, San Diego - Rady School of Management (Coursera)",
    date: "March 2024",
    icon: Code,
    link: "https://www.coursera.org/account/accomplishments/verify/VC53NDFC9J3L"
  }
];

const leadership = [
  {
    title: "Placement Committee President, PlaCom – Bennett University (2024 – 2026)",
    link: "https://www.linkedin.com/posts/raghav-garg-1b8bb0249_placom-placementcommittee-leadership-activity-7312126387417452544-NqjT/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD2UUBwB9NQZ-ZX_tMDzinsz94RePpycPmA"
  },
  { title: "Convener, Converge S.O Annual Alumni Meet (March 2025)" },
  { title: "CareerCon Lead, Bennett University (November 2024)" },
  { title: "Vice President, Bennovate – E-Summit of Bennett University (November 2024)" },
  { title: "Joint Secretary, Spark E-Cell – Entrepreneurship Cell (Jan 2024 – Dec 2024)" },
  { title: "Volunteer, Startup MahaKumbh Event (March 2024)" }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning artificial intelligence, full-stack development, and data science.
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="portfolio-card group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-badge group">
                      <span className="skill-text">{skill}</span>
                      <div className="skill-glow"></div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Certifications */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <Award className="inline-block mr-3 h-8 w-8 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card key={index} className="portfolio-card group text-center">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-gradient transition-all duration-300 mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                      <p className="text-xs text-primary font-medium mt-1">{cert.date}</p>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-xs text-primary hover:text-primary/80 transition-colors underline"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Leadership */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <Users className="inline-block mr-3 h-8 w-8 text-primary" />
            Leadership & Responsibilities
          </h3>
          <Card className="portfolio-card">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {leadership.map((role, index) => (
                  <li key={index} className="flex items-start gap-4 timeline-item">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-muted-foreground leading-relaxed">{role.title}</span>
                      {role.link && (
                        <a 
                          href={role.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-3 text-sm text-primary hover:text-primary/80 transition-colors underline"
                        >
                          View Post
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;