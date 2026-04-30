import {JSX} from 'react';

export type Locale = 'en' | 'zh';

export interface LocaleStrings {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    resume: string;
    portfolio: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    name: string;
    description: JSX.Element;
    resumeButton: string;
    generatePdfButton: string;
    contactButton: string;
  };
  about: {
    heading: string;
    description: string;
    items: Array<{label: string; text: string}>;
  };
  resume: {
    education: string;
    work: string;
    skills: string;
    skillsDescription: string;
  };
  portfolio: {
    heading: string;
    items: Array<{title: string; description: string}>;
  };
  education: Array<{date: string; location: string; title: string; content: string}>;
  experience: Array<{date: string; location: string; title: string; content: string}>;
  skills: Array<{name: string; skills: Array<{name: string}>}>;
  testimonials: {
    items: Array<{name: string; text: string}>;
  };
  contact: {
    headerText: string;
    description: string;
    items: Array<{text: string}>;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submitButton: string;
      ariaLabel: string;
    };
  };
  socials: {
    github: string;
    stackOverflow: string;
    linkedIn: string;
    instagram: string;
    twitter: string;
  };
  footer: {
    providedBy: JSX.Element;
    copyright: string;
  };
  ui: {
    menuButton: string;
    openSidebar: string;
  };
}
