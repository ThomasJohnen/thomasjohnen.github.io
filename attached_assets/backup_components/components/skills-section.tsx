import { Card, CardContent } from "@/components/ui/card";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: "fas fa-code",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      skills: ["JavaScript", "Java", "Python", "C", "Dart", "HTML", "CSS"],
      skillColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
    },
    {
      title: "Technologies Web & Mobile",
      icon: "fab fa-react",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      skills: ["React.js", "Node.js", "Flutter", "Android Studio", "HTML5", "CSS"],
      skillColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    },
    {
      title: "Bases de données & Outils",
      icon: "fas fa-database",
      iconColor: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Git", "Visual Studio", "IntelliJ IDEA"],
      skillColor: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    },
    {
      title: "Tests & DevSecOps",
      icon: "fas fa-shield-alt",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      skills: ["Tests automatisés", "DevSecOps", "Bash", "CI/CD", "Assurance qualité"],
      skillColor: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
    },
    {
      title: "Frameworks & Autres",
      icon: "fas fa-cogs",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
      skills: ["Spring Framework", "JSON", "Design Patterns", "Management", "Gestion du temps"],
      skillColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Compétences techniques</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications web exceptionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="skill-card bg-slate-50 dark:bg-slate-800 theme-transition">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`${category.icon} ${category.iconColor} text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`${category.skillColor} px-3 py-1 rounded-full text-sm`}
                    >
                      {skill}
                    </span>
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
