import { Trophy, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Best Project in Web Development",
    organization: "TECH Xelerate, BITS Pilani Hyderabad",
    icon: Trophy,
    description: "Recognized for outstanding web development project showcasing technical excellence and innovation."
  },
  {
    title: "500+ DSA Problems Solved",
    organization: "Various Coding Platforms",
    icon: Target,
    description: "Strengthened coding skills by solving over 500 Data Structures and Algorithms problems across multiple platforms."
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground text-lg">Recognition and milestones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="hover-scale transition-all duration-300 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-success/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-success" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-success font-medium mb-3">{achievement.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
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
}