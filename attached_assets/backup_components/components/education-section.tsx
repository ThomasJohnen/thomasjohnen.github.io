import { Card, CardContent } from "@/components/ui/card";

export function EducationSection() {
  const educationItems = [
    {
      title: "Bachelor Informatique, Programmation informatique, applications spécifiques",
      institution: "Haute École Léonard de Vinci, Bruxelles",
      period: "2021 - 2024",
      description: "Formation en développement d'applications. Première année réussie avec succès. Délégué de classe.",
      icon: "fas fa-graduation-cap",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      title: "Baccalauréat sciences et techniques de gestion",
      institution: "ICHEC Brussels Management School",
      period: "2016 - 2018",
      description: "Spécialisation en gestion d'entreprise et marketing.",
      icon: "fas fa-business-time",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Baccalauréat sciences économiques et sociales",
      institution: "Solvay Brussels School of Economics and Management",
      period: "2014 - 2016",
      description: "Formation en économie. Délégué d'année.",
      icon: "fas fa-chart-line",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      title: "Formations en ligne",
      institution: "Udemy, OpenClassrooms, Centre de formation à distance",
      period: "2018 - 2019",
      description: "Formation Complète Développeur Web, PHP et MySQL, HTML5 et CSS3, Web design, Google Ads.",
      icon: "fas fa-laptop-code",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Formation</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mon parcours académique et mes certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <Card key={index} className="bg-slate-50 dark:bg-slate-800 theme-transition">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`${item.icon} ${item.iconColor} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                      {item.period}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
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
