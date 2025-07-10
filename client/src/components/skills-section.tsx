import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Server, 
  Bug, 
  Database, 
  Settings, 
  Users 
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: <Code className="text-primary" />,
      skills: ["JavaScript", "Java", "Python", "TypeScript", "C", "HTML5", "CSS3"],
    },
    {
      title: "Technologies Web & Mobile",
      icon: <Server className="text-secondary" />,
      skills: ["React.js", "Node.js", "Flutter", "Android Studio", "Spring Boot", "Express.js"],
    },
    {
      title: "Tests & Automatisation",
      icon: <Bug className="text-green-600" />,
      skills: ["Selenium", "Jest", "Cypress", "Tests automatisés", "TDD/BDD", "Playwright", "Postman"],
    },
    {
      title: "Bases de données & APIs",
      icon: <Database className="text-blue-600" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "REST APIs", "GraphQL", "Drizzle ORM"],
    },
    {
      title: "DevSecOps & Outils",
      icon: <Settings className="text-purple-600" />,
      skills: ["Git", "Docker", "CI/CD", "Jenkins", "GitLab", "DevSecOps"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-red-600" />,
      skills: ["Management", "Gestion du temps", "Travail d'équipe", "Communication", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Compétences <span className="text-primary">techniques</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications web robustes et des tests de qualité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card bg-card theme-transition hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="skill-tag"
                    >
                      {skill}
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