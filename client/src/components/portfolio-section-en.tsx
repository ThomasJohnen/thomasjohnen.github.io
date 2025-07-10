import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function PortfolioSectionEn() {
  const projects = [
    {
      title: "SociaalTaal – Spring Boot Application",
      description: "A web application developed in Java using Spring Boot for a development exam. This project demonstrates proficiency in the Spring framework and best development practices.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      skills: ["Java", "Spring Boot", "Spring Framework", "MVC"],
      demoLink: "#",
      codeLink: "https://github.com/ThomasJohnen/SpringAugust2024",
      year: "2024"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/50 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my most recent and meaningful projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-card overflow-hidden shadow-lg theme-transition">
              <img
                src={project.image}
                alt={`SociaalTaal Interface – ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.demoLink !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.codeLink !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}