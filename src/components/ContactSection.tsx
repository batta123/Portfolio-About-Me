import { Mail, Phone, Linkedin, Github, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    name: "Email",
    value: "battadileep116@gmail.com",
    href: "mailto:battadileep116@gmail.com",
    icon: Mail,
    color: "text-red-500"
  },
  {
    name: "Phone",
    value: "+91 6302668785",
    href: "tel:+916302668785",
    icon: Phone,
    color: "text-green-500"
  },
  {
    name: "LinkedIn",
    value: "dileep-batta",
    href: "https://www.linkedin.com/in/dileep-batta",
    icon: Linkedin,
    color: "text-blue-600"
  },
  {
    name: "GitHub",
    value: "batta123",
    href: "https://github.com/batta123",
    icon: Github,
    color: "text-gray-600 dark:text-gray-400"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={method.name} className="hover-scale transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Button
                    variant="ghost"
                    className="w-full h-auto p-0 justify-start text-left"
                    asChild
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-4 w-full">
                        <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                          <IconComponent className={`h-5 w-5 ${method.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium">{method.name}</h3>
                          <p className="text-muted-foreground text-sm truncate">{method.value}</p>
                        </div>
                      </div>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto hover-glow">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently looking for new opportunities and would love to hear from you. 
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark"
                asChild
              >
                <a href="mailto:battadileep116@gmail.com">
                  Send me an email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}