import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Test Engineer",
      company: "Buy Way Personal Finance",
      location: "Bruxelles, Belgique",
      period: "Juillet 2024 - Présent",
      description: "Responsable de l'élaboration, l'implémentation et la maintenance de tests automatisés pour assurer le plus haut niveau de qualité des applications. Garant de l'environnement de test et point de contact privilégié des testeurs métiers.",
      skills: ["Tests automatisés", "Assurance qualité", "Environnement de test", "Selenium", "CI/CD"],
      side: "left",
    },
    {
      title: "DevSecOps Intern",
      company: "Buy Way Services",
      location: "Bruxelles, Belgique",
      period: "Janvier 2024 - Mai 2024",
      description: "Stage axé sur les pratiques DevSecOps, intégration de la sécurité dans le cycle de développement et déploiement d'applications. Mise en place de pipelines CI/CD sécurisés.",
      skills: ["DevSecOps", "Sécurité", "CI/CD", "Docker", "Jenkins"],
      side: "right",
    },
    {
      title: "Fondateur & Développeur Full Stack",
      company: "E-volutio",
      location: "Bruxelles, Belgique",
      period: "Janvier 2019 - Octobre 2022",
      description: "Spécialisé dans les services de marketing digital. Services de référencement naturel, positionnement Google, expérience utilisateur, présence en ligne, campagnes Google et réseaux sociaux. Création et maintenance de sites internet.",
      skills: ["Marketing digital", "SEO", "Développement web", "React", "Node.js"],
      side: "left",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Expérience <span className="text-primary">professionnelle</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel et les projets qui ont façonné mon expertise
          </p>
        </div>

        <div className="relative experience-timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-center mb-12">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg ring-2 ring-primary/20 z-10"></div>
              
              <div
                className={`ml-12 md:ml-0 ${
                  experience.side === "left"
                    ? "md:w-1/2 md:pr-8"
                    : "md:w-1/2 md:ml-auto md:pl-8"
                }`}
              >
                <Card className="project-card bg-card shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-xl mb-2">{experience.title}</h3>
                        <div className="flex items-center text-secondary font-medium mb-1">
                          <Building2 className="w-4 h-4 mr-2" />
                          {experience.company}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mb-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {experience.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}