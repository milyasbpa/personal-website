export interface ExperienceItem {
  company: string;
  url: string;
  role: string;
  dates: string;
  location: string;
  desc: string;
  fullDesc: string;
  points: string[];
  tech: string[];
}

export interface PostItem {
  slug: string;
  title: string;
  date: string;
  read: string;
  tag: string;
}

export interface LanguageItem {
  flag: string;
  lang: string;
  native: string;
  level: string;
  levelDesc: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}
