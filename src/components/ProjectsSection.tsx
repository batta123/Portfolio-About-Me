import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "MediConnect",
    description: "Full-stack web application designed for seamless online doctor appointments and comprehensive healthcare management. Features secure user authentication, intuitive appointment booking system, prescription upload functionality, and integrated payment processing. Built with modern technologies ensuring real-time updates and smooth frontend-backend communication for optimal user experience.",
    technologies: ["Python", "Django", "PostgreSQL", "React.js", "REST APIs"],
    githubLink: "https://github.com/batta123/MediConnect",
    liveLink: null
  },
  {
    title: "Fitness Tracker",
    description: "Robust backend system engineered for comprehensive fitness activity tracking, calorie monitoring, and user progress analytics. Implements JWT-based authentication for secure access, modular service architecture for scalability, and RESTful API design for seamless integration. Features advanced security protocols and optimized database queries for enhanced performance.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL"],
    githubLink: "https://github.com/batta123/FITNESS-TRACKER",
    liveLink: null
  },
  {
    title: "Personal Expense Tracker",
    description: "Intuitive web application for managing personal finances and tracking expenses. Features categorized expense logging, visual analytics with charts, budget management, and responsive design. Built with modern React.js for smooth user interactions and local storage for data persistence.",
    technologies: ["React.js", "JavaScript", "CSS", "Chart.js", "Local Storage"],
    githubLink: "https://github.com/batta123/Personal-Expense-Tracker",
    liveLink: "https://personal-expense-trackee.netlify.app/"
  },
  {
    title: "Personalized Content Dashboard",
    description: "Dynamic content management dashboard with personalized user experience. Features real-time content updates, customizable layouts, user preference settings, and responsive design. Implements modern UI/UX principles with smooth animations and interactive components for enhanced user engagement.",
    technologies: ["React.js", "JavaScript", "CSS", "API Integration", "Responsive Design"],
    githubLink: "https://github.com/batta123/Personalized-Content-Dashboard",
    liveLink: "https://personalized-content-dashb.netlify.app/"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="hover-glow transition-all duration-300 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                           aria-label={`View ${project.title} on GitHub`}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                           aria-label={`View ${project.title} live`}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}