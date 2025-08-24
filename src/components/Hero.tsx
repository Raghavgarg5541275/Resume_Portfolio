import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import portraitImage from "@/assets/raghav-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-glow" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-portfolio-strong">
                <img 
                  src={portraitImage} 
                  alt="Raghav Garg - AI Engineer & Full-Stack Developer" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center lg:text-left lg:order-1 section-fade-in">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="block text-foreground">RAGHAV</span>
                  <span className="block text-gradient-neon animate-pulse-neon">GARG</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                  AI Engineer & Full-Stack Developer
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Self-motivated CSE student specializing in Artificial Intelligence with a strong foundation in Python, 
                machine learning, and full-stack development. Passionate about translating business needs into 
                innovative technical solutions.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="portfolio-button-primary inline-flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
                <a href="#projects" className="portfolio-button-secondary inline-flex items-center justify-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Projects
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start pt-8">
                <a 
                  href="mailto:raghavgarg.ynr@gmail.com" 
                  className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-300 hover:scale-110 shadow-portfolio-soft hover:shadow-portfolio-neon hyperlink-element"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/raghav-garg-1b8bb0249/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-300 hover:scale-110 shadow-portfolio-soft hover:shadow-portfolio-neon hyperlink-element"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/Raghavgarg5541275" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-300 hover:scale-110 shadow-portfolio-soft hover:shadow-portfolio-neon hyperlink-element"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;