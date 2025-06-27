import { Header } from "@/components/header";
import { HeroSectionEn } from "@/components/hero-section-en";
import { SkillsSectionEn } from "@/components/skills-section-en";
import { ExperienceSectionEn } from "@/components/experience-section-en";
import { EducationSectionEn } from "@/components/education-section-en";
import { PortfolioSectionEn } from "@/components/portfolio-section-en";
import { ContactSectionEn } from "@/components/contact-section-en";
import { FooterEn } from "@/components/footer-en";

export default function HomeEn() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSectionEn />
        <SkillsSectionEn />
        <ExperienceSectionEn />
        <EducationSectionEn />
        <PortfolioSectionEn />
        <ContactSectionEn />
      </main>
      <FooterEn />
    </div>
  );
}