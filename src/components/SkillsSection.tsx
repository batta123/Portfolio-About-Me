import { Code, Database, Cloud, Wrench, BookOpen, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["React.js", "Django", "Spring Boot"]
  },
  {
    title: "Libraries",
    icon: BookOpen,
    skills: ["Redux Toolkit", "TailwindCSS", "Chart.js", "Recharts"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    title: "Cloud & DevTools",
    icon: Cloud,
    skills: ["AWS (Basics)", "VS Code", "Git", "GitHub", "PyCharm"]
  },
  {
    title: "CS Concepts",
    icon: Wrench,
    skills: ["DSA", "OOP", "Operating Systems", "Computer Networks"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="hover-scale transition-all duration-300 animate-fade-in" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}