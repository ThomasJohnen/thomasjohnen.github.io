import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès. Je vous répondrai bientôt.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sitecv.rare039@passmail.net",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+32 471 89 78 55",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Bruxelles, Belgique",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Intéressé par une collaboration ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Je suis toujours ouvert à discuter de nouveaux projets passionnants, 
              d'opportunités créatives ou simplement pour échanger sur la tech.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                    <item.icon className={`${item.iconColor} h-5 w-5`} />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-slate-600 dark:text-slate-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-medium mb-4">Suivez-moi sur</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-100 dark:hover:bg-orange-900/30 theme-transition"
                    aria-label={social.label}
                  >
                    <social.icon className="text-slate-600 dark:text-slate-400 h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-50 dark:bg-slate-800 theme-transition">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou posez votre question..."
                    className="mt-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium theme-transition"
                >
                  {contactMutation.isPending ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
