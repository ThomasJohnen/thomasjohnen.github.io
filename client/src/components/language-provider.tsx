import { createContext, useContext, useState, useEffect } from "react";

type Language = "fr" | "en";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const initialState: LanguageProviderState = {
  language: "fr",
  setLanguage: () => null,
  toggleLanguage: () => null,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "fr",
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language;
    if (stored && (stored === "fr" || stored === "en")) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (language: Language) => {
    localStorage.setItem("language", language);
    setLanguageState(language);
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};