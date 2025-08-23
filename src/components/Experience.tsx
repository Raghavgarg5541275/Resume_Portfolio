import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "UKB Electronics Pvt. Ltd.",
    location: "Remote",
    duration: "May 2024 – July 2024",
    achievements: [
      "Built ML models to analyze sensor data, improving accuracy by 15%",
      "Automated defect detection system, reducing manual checks by 20%",
      "Researched algorithms to enable predictive maintenance"
    ],
    skills: ["Python", "Scikit-learn", "Pandas", "OpenCV", "TensorFlow"]
  },
  {
    title: "Virtual Intern",
    company: "Cisco Networking Academy",
    location: "Remote",
    duration: "May 2024 – July 2024",
    achievements: [
      "Designed and debugged network setups to simulate real-world cases",
      "Applied security best practices to identify threats"
    ],
    skills: ["Cisco Packet Tracer", "Networking Tools", "Network Security", "Troubleshooting"]
  },
  {
    title: "SDE Intern",
    company: "Metabees.in",
    location: "Remote",
    duration: "January 2023 – June 2023",
    achievements: [
      "Developed a 3D SaaS platform for Naptaverse, boosting engagement by 25%",
      "Integrated backend APIs for faster data loading",
      "Collaborated across teams to optimize front-end performance"
    ],
    skills: ["HTML", "CSS", "JavaScript", "Three.js", "MongoDB", "Node.js", "Express.js", "Git", "Agile"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through innovative projects and collaborative teams, building solutions that make a difference.
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="portfolio-card timeline-item group">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:text-right gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;