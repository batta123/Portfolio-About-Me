import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import leetcodeLogo from "@/assets/leetcode-logo.png";
import codolioLogo from "@/assets/codolio-logo.png";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/BATTA9966/",
    logo: leetcodeLogo,
    description: "Algorithmic problem solving"
  },
  {
    name: "Codolio", 
    url: "https://codolio.com/profile/Batta",
    logo: codolioLogo,
    description: "Coding practice platform"
  }
];

export default function CodingProfilesSection() {
  return (
    <section id="coding-profiles" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding Profiles</h2>
          <p className="text-muted-foreground text-lg">Find me on coding platforms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {profiles.map((profile, index) => (
            <Card key={profile.name} className="hover-glow transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <img 
                        src={profile.logo} 
                        alt={`${profile.name} logo`}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{profile.name}</h3>
                      <p className="text-muted-foreground text-sm">{profile.description}</p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" asChild className="opacity-70 group-hover:opacity-100 transition-opacity">
                    <a href={profile.url} target="_blank" rel="noopener noreferrer"
                       aria-label={`Visit ${profile.name} profile`}>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}