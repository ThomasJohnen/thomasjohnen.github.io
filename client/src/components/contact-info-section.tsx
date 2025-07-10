import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfoSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités professionnelles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:sitecv.rare039@passmail.net" 
                        className="text-primary hover:underline"
                      >
                        sitecv.rare039@passmail.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Localisation</p>
                      <p className="text-muted-foreground">Bruxelles, Belgique</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a 
                        href="tel:+32123456789" 
                        className="text-primary hover:underline"
                      >
                        +32 1 23 45 67 89
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Réseaux sociaux et actions */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Réseaux professionnels</h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    asChild
                  >
                    <a href="https://linkedin.com/in/thomas-johnen" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">Voir mon profil professionnel</p>
                        </div>
                      </div>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    asChild
                  >
                    <a href="https://github.com/thomas-johnen" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">GitHub</p>
                          <p className="text-sm text-muted-foreground">Découvrir mes projets</p>
                        </div>
                      </div>
                    </a>
                  </Button>

                  <Button
                    className="w-full h-auto p-4"
                    asChild
                  >
                    <a href="mailto:sitecv.rare039@passmail.net?subject=Opportunité professionnelle">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <div className="text-left">
                          <p className="font-medium">Envoyer un email</p>
                          <p className="text-sm opacity-90">Contact direct</p>
                        </div>
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message de disponibilité */}
          <div className="mt-8 text-center">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">Disponibilité</h3>
                <p className="text-muted-foreground">
                  Actuellement ouvert aux nouvelles opportunités professionnelles. 
                  N'hésitez pas à me contacter pour discuter de vos projets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}