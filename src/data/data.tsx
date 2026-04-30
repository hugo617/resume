import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  DocumentMagnifyingGlassIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {ContactType, Social} from './dataDef';

/**
 * Section definition (used as DOM IDs for anchor scrolling)
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero image
 */
export const heroImageSrc = heroImage;

/**
 * About section - structural data (images, icons)
 */
export const aboutProfileImageSrc = profilepic;

export const aboutItemIcons = [
  MapIcon,
  CalendarIcon,
  FlagIcon,
  SparklesIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
] as const;

/**
 * Hero action icons and hrefs
 */
export const heroActions = [
  {
    href: '/assets/resume.pdf',
    primary: true,
    Icon: ArrowDownTrayIcon,
    textKey: 'resumeButton' as const,
  },
  {
    primary: false,
    Icon: DocumentMagnifyingGlassIcon,
    textKey: 'generatePdfButton' as const,
  },
  {
    href: `#${SectionId.Contact}`,
    primary: false,
    textKey: 'contactButton' as const,
  },
];

/**
 * Skill levels (non-translatable data)
 */
export const skillLevels = [
  [
    {level: 10},
    {level: 4},
    {level: 3},
  ],
  [
    {level: 9},
    {level: 7},
    {level: 6},
  ],
  [
    {level: 8},
    {level: 5},
    {level: 4},
  ],
  [
    {level: 9},
    {level: 4},
    {level: 3},
  ],
] as const;

/**
 * Portfolio items - images and URLs (titles/descriptions come from locale)
 */
export const portfolioItems = [
  {url: 'https://reactresume.com', image: porfolioImage1},
  {url: 'https://reactresume.com', image: porfolioImage2},
  {url: 'https://reactresume.com', image: porfolioImage3},
  {url: 'https://reactresume.com', image: porfolioImage4},
  {url: 'https://reactresume.com', image: porfolioImage5},
  {url: 'https://reactresume.com', image: porfolioImage6},
  {url: 'https://reactresume.com', image: porfolioImage7},
  {url: 'https://reactresume.com', image: porfolioImage8},
  {url: 'https://reactresume.com', image: porfolioImage9},
  {url: 'https://reactresume.com', image: porfolioImage10},
  {url: 'https://reactresume.com', image: porfolioImage11},
];

/**
 * Testimonial images (text/names come from locale)
 */
export const testimonialImageSrc = testimonialImage;

export const testimonialAvatars = [
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
];

/**
 * Contact items - types and hrefs (text comes from locale)
 */
export const contactItems = [
  {type: ContactType.Email as ContactType, href: 'mailto:reachout@timbaker.me'},
  {type: ContactType.Location as ContactType, href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z'},
  {type: ContactType.Instagram as ContactType, href: 'https://www.instagram.com/tbakerx/'},
  {type: ContactType.Github as ContactType, href: 'https://github.com/tbakerx'},
];

/**
 * Social links - icons and hrefs (labels come from locale)
 */
export const socialLinks: Social[] = [
  {label: 'github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'stackOverflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'linkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
