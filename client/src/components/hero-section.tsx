import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// Temporary placeholder - will use your actual photo when image configuration is fixed

export function HeroSection() {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Thomas_Johnen.pdf';
    link.download = 'CV_Thomas_Johnen.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "CV téléchargé",
      description: "Le CV a été téléchargé avec succès.",
    });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-foreground">Thomas</span>
                <span className="text-primary"> Johnen</span>
              </h1>
              <p className="text-xl sm:text-2xl text-secondary font-medium mb-4">
                Test Engineer & Développeur Full Stack
              </p>
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="inline mr-2 text-primary" size={18} />
                <span>Bruxelles, Belgique</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diplômé en Informatique de gestion à la Haute École Léonard de Vinci, 
                je conçois des tests automatisés robustes pour garantir la qualité des applications. 
                Fort d'une expérience en DevSecOps et développement full-stack, j'assure fiabilité, 
                performance et sécurité tout au long du cycle logiciel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Me contacter
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </Button>
            </div>

            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/ThomasJohnen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/thomas-johnen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/thomas-photo.jpg"
              alt="Photo professionnelle de Thomas Johnen"
              className="w-80 h-80 rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}