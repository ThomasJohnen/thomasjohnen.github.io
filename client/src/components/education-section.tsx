import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building2, Calendar, Trophy } from "lucide-react";

export function EducationSection() {
  const educationItems = [
    {
      title: "Bachelor Informatique, Programmation informatique, applications spécifiques",
      institution: "Haute École Léonard de Vinci, Bruxelles",
      period: "2021 - 2024",
      description: "Formation en développement d'applications. Première année réussie avec succès. Délégué de classe.",
      icon: <GraduationCap className="text-primary" />,
      status: "Diplômé",
      type: "degree"
    },
    {
      title: "Formations en ligne spécialisées",
      institution: "Udemy, OpenClassrooms, Centre de formation à distance",
      period: "2018 - 2019",
      description: "Formation Complète Développeur Web, PHP et MySQL, HTML5 et CSS3, Web design, Google Ads.",
      icon: <GraduationCap className="text-purple-600" />,
      status: "Certifié",
      type: "certification"
    },
  ];

  return (
    <section id="education" className="py-20 bg-background theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Formation & <span className="text-primary">Éducation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique et mes certifications professionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <Card key={index} className="bg-card theme-transition hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                      <Badge 
                        variant={
                          item.type === "degree" ? "default" : 
                          item.type === "incomplete" ? "outline" : "secondary"
                        } 
                        className={`ml-2 ${
                          item.type === "incomplete" 
                            ? "border-orange-300 text-orange-700 dark:border-orange-700 dark:text-orange-300" 
                            : ""
                        }`}
                      >
                        {item.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center text-secondary font-medium mb-2">
                      <Building2 className="w-4 h-4 mr-2" />
                      {item.institution}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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