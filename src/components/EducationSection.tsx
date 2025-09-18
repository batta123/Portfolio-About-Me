import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">My academic journey</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="hover-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Technology in Computer Science (AIML)</h3>
                  <p className="text-primary font-medium mb-2">Mohan Babu University</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>Aug 2022 – May 2026</span>
                  </div>
                  <p className="text-muted-foreground">
                    Computer Science AIML student specializing in Artificial Intelligence and Machine Learning with a strong foundation in computer science fundamentals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Intermediate (MPC)</h3>
                  <p className="text-primary font-medium mb-2">Sri Chaitanya Junior College</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>2020 – 2022</span>
                  </div>
                  <p className="text-muted-foreground">
                    Completed intermediate education with Mathematics, Physics, and Chemistry (MPC) specialization in Kurnool, India.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Secondary Education</h3>
                  <p className="text-primary font-medium mb-2">Narayana Concept School</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>2019 – 2020</span>
                  </div>
                  <p className="text-muted-foreground">
                    Completed 10th standard with strong academic foundation in core subjects including Mathematics, Science, and English. Achieved excellent results and developed problem-solving skills that formed the basis for higher education.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}