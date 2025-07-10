import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Test Engineer",
      company: "Buy Way Personal Finance",
      period: "Juillet 2024 - Présent",
      description: "Responsable de l'élaboration, l'implémentation et la maintenance de tests automatisés pour assurer le plus haut niveau de qualité des applications. Garant de l'environnement de test et point de contact privilégié des testeurs métiers.",
      skills: ["Tests automatisés", "Assurance qualité", "Environnement de test"],
      side: "left",
    },
    {
      title: "DevSecOps Intern",
      company: "BUY WAY SERVICES",
      period: "Janvier 2024 - Mai 2024",
      description: "Stage axé sur les pratiques DevSecOps, intégration de la sécurité dans le cycle de développement et déploiement d'applications.",
      skills: ["DevSecOps", "Sécurité", "CI/CD"],
      side: "right",
    },
    {
      title: "Fondateur",
      company: "E-volutio",
      period: "Janvier 2019 - Octobre 2022",
      description: "Spécialisé dans les services de marketing digital. Services de référencement naturel, positionnement Google, expérience utilisateur, présence en ligne, campagnes Google et réseaux sociaux. Création et maintenance de sites internet.",
      skills: ["Marketing digital", "SEO", "Développement web"],
      side: "left",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Expérience professionnelle</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mon parcours professionnel et les projets qui ont façonné mon expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full shadow-lg"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-orange-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg ring-2 ring-orange-200 dark:ring-orange-800"></div>
              <div
                className={`ml-12 md:ml-0 ${
                  experience.side === "left"
                    ? "md:w-1/2 md:pr-8 md:text-right"
                    : "md:w-1/2 md:ml-auto md:pl-8"
                }`}
              >
                <Card className="bg-white dark:bg-slate-900 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{experience.title}</h3>
                    <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">
                      {experience.company}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      {experience.period}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
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
