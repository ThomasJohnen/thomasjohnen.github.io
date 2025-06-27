import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const navItems = [
    { href: "#hero", label: "Accueil" },
    { href: "#skills", label: "Compétences" },
    { href: "#experience", label: "Expérience" },
    { href: "#education", label: "Formation" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ThomasJohnen", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/thomas-johnen/", label: "LinkedIn" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TJ</span>
              </div>
              <span className="font-semibold text-lg">Thomas Johnen</span>
            </div>
            <p className="text-slate-300 mb-4">
              Test Engineer & Développeur Full Stack spécialisé en tests automatisés et DevSecOps.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-slate-400 hover:text-white"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a 
                  href="mailto:sitecv.rare039@passmail.net"
                  className="hover:text-white transition-colors"
                >
                  sitecv.rare039@passmail.net
                </a>
              </li>
              <li>
                <a 
                  href="tel:+32471897855"
                  className="hover:text-white transition-colors"
                >
                  +32 471 89 78 55
                </a>
              </li>
              <li>Bruxelles, Belgique</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Thomas Johnen. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}