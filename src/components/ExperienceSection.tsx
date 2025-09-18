import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "LLM Trainer/Prompt Engineer",
    company: "SOUL AI",
    location: "Remote",
    period: "Apr 2025 – Present",
    description: [
      "Design and optimize prompts for large language models to improve response accuracy",
      "Train and fine-tune AI models for specific use cases and domains",
      "Collaborate with ML teams to enhance model performance and reliability",
      "Develop training datasets and evaluation metrics for model assessment"
    ]
  },
  {
    title: "Software Engineer for AI Training",
    company: "Outlier AI",
    location: "Remote",
    period: "Apr 2024 – Present",
    description: [
      "Optimized code and algorithms for faster model training",
      "Completed AI/ML development assignments on time with high accuracy"
    ]
  },
  {
    title: "Subject Matter Expert",
    company: "LearningMate",
    location: "Remote",
    period: "July 2024 – Nov 2024",
    description: [
      "Created instructional materials, assignments, and assessments",
      "Collaborated with teams to enhance e-learning content",
      "Reviewed technical documents for quality and clarity"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-accent font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}