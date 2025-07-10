import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building2, Calendar, Trophy } from "lucide-react";

export function EducationSectionEn() {
  const educationItems = [
    {
      title: "Bachelor's Degree in Computer Science – Software Development",
      institution: "Haute École Léonard de Vinci, Brussels, Belgium",
      period: "2021 – 2024",
      description: "Application development program. Successfully completed the first year with distinction. Served as class representative.",
      icon: <GraduationCap className="text-primary" />,
      status: "Graduate",
      type: "degree"
    },
    {
      title: "Specialized Online Training",
      institution: "Udemy, OpenClassrooms, Centre de Formation à Distance",
      period: "2018 – 2019",
      description: "Completed courses in Full-Stack Web Development, PHP & MySQL, HTML5 & CSS3, Web Design, and Google Ads.",
      icon: <GraduationCap className="text-purple-600" />,
      status: "Certified",
      type: "certification"
    },
  ];

  return (
    <section id="education" className="py-20 bg-background theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education & <span className="text-primary">Training</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications.
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