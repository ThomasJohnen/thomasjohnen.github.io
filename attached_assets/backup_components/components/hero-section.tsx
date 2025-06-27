import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export function HeroSection() {
  const handleDownloadCV = async () => {
    try {
      await apiRequest("GET", "/api/download-cv");
      // In a real implementation, this would trigger the actual download
      alert("Fonctionnalité de téléchargement du CV à implémenter avec un fichier PDF réel");
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Thomas Johnen
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6">
                Test Engineer & Développeur Full Stack
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                Diplômé de mes études en Informatique de gestion à la Haute École Léonard de Vinci, je conçois des tests automatisés robustes pour garantir la qualité des applications. 
                Fort d'une expérience en DevSecOps et développement full-stack, j'assure fiabilité, performance et sécurité 
                tout au long du cycle logiciel.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={handleDownloadCV}
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium theme-transition"
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 theme-transition"
              >
                Me contacter
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com"
                className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 theme-transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 theme-transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 theme-transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <img
              src="/profile-photo.jpg"
              alt="Photo professionnelle de Thomas Johnen"
              className="w-80 h-80 rounded-3xl object-cover object-top shadow-2xl dark:shadow-slate-900/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
