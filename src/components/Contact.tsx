import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "raghavgarg.ynr@gmail.com",
    href: "mailto:raghavgarg.ynr@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7726928805",
    href: "tel:+917726928805"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bennett University, Greater Noida",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Raghavgarg5541275",
    description: "View my open source projects"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raghav-garg-1b8bb0249/",
    description: "Connect with me professionally"
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    href: "https://codolio.com/profile/Raghav554/card",
    description: "Visit my coding platform"
  },
  {
    icon: ExternalLink,
    label: "LinkTree",
    href: "https://linktr.ee/raghav_garg_ynr",
    description: "All my important links"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative AI solutions or discuss exciting opportunities? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="portfolio-card">
            <CardContent className="pt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Send a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Drop me a line and I'll get back to you as soon as possible.
                </p>
              </div>
              
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="0f836cbe-af35-4abe-b4a4-12d232a0071d" />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      name="first_name"
                      placeholder="John" 
                      className="border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      name="last_name"
                      placeholder="Doe" 
                      className="border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    className="border-border focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input 
                    name="subject"
                    placeholder="Project collaboration opportunity" 
                    className="border-border focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project or idea..." 
                    className="min-h-32 border-border focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" className="portfolio-button-primary w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="portfolio-card">
              <CardContent className="pt-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Prefer direct contact? Reach out through any of these channels.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.label}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="portfolio-card">
              <CardContent className="pt-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Follow Me</h3>
                <p className="text-muted-foreground">
                  Stay updated with my latest projects and professional journey.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border hover:bg-accent transition-all duration-300 group text-center"
                      >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-xs text-muted-foreground">{social.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Education */}
            <Card className="portfolio-card">
              <CardContent className="pt-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Bachelor's in Technology</p>
                  <p className="text-foreground">Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">Bennett University • CGPA: 9.0</p>
                  <p className="text-sm text-muted-foreground">Expected May 2026</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;