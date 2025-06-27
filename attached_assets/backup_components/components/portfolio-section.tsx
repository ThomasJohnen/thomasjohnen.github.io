import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      title: "E-volutio - Agence Marketing Digital",
      description: "Entreprise spécialisée dans les services de marketing digital : référencement naturel, positionnement Google, expérience utilisateur, présence en ligne, campagnes Google et réseaux sociaux.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      skills: ["Marketing Digital", "SEO", "Google Ads"],
      skillColors: [
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Test Automation Framework",
      description: "Développement d'un framework de tests automatisés robuste pour garantir la qualité des applications chez Buy Way Personal Finance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      skills: ["Tests automatisés", "Assurance qualité", "Framework"],
      skillColors: [
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
        "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "SociaalTaal - Application Spring Boot",
      description: "Application web développée en Java avec Spring Boot pour un examen de développement. Projet démontrant la maîtrise du framework Spring et des bonnes pratiques de développement.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      skills: ["Java", "Spring Boot", "Spring Framework"],
      skillColors: [
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
      ],
      demoLink: "#",
      codeLink: "https://github.com/ThomasJohnen/SpringAugust2024",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-800 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Découvrez mes projets les plus récents et significatifs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-white dark:bg-slate-900 overflow-hidden shadow-lg theme-transition">
              <img
                src={project.image}
                alt={`Interface de ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`${project.skillColors[skillIndex]} px-2 py-1 rounded text-xs`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="text-orange-600 dark:text-orange-400 hover:underline flex items-center"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-orange-600 dark:text-orange-400 hover:underline flex items-center"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-medium theme-transition">
            <span>Voir tous les projets</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
