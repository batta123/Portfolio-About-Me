import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Dileep Batta</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Student & Software Developer
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              To work for an organization where I may gain experience, improve my skills, and contribute to the success of the company. 
              Computer Science (CS) student with solid skills in Python, Java, and strong desire to utilize CS knowledge. 
              Good work ethic, a desire to learn and improve technical skills, and the ability to quickly learn and unlearn skills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Tirupati, Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a 
                href="mailto:battadileep116@gmail.com"
                className="hover:text-primary transition-colors"
              >
                battadileep116@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a 
                href="tel:+916302668785"
                className="hover:text-primary transition-colors"
              >
                +91 6302668785
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}