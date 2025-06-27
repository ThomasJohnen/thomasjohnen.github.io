import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function HeroSectionEn() {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Thomas_Johnen.pdf';
    link.download = 'CV_Thomas_Johnen.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "CV downloaded",
      description: "The CV has been downloaded successfully.",
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
                Test Engineer & Full Stack Developer
              </p>
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="inline mr-2 text-primary" size={18} />
                <span>Brussels, Belgium</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Computer Science graduate (Business Computing) from Haute École Léonard de Vinci with hands-on experience in full-stack development and DevSecOps. Skilled in designing and implementing robust automated tests to ensure high application quality. Committed to delivering reliable, high-performance, and secure solutions throughout the software development lifecycle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact me
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
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
              alt="Professional photo of Thomas Johnen"
              className="w-80 h-80 rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}