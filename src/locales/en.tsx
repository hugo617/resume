import {LocaleStrings} from './types';

export const en: LocaleStrings = {
  meta: {
    title: 'React Resume Template',
    description: "Example site built with Tim Baker's react resume template",
  },
  nav: {
    about: 'About',
    resume: 'Resume',
    portfolio: 'Portfolio',
    testimonials: 'Testimonials',
    contact: 'Contact',
  },
  hero: {
    name: `I'm Tim Baker.`,
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I&apos;m a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently
          working at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first,
          domain registrar and site builder.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
          plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
          <strong className="text-stone-100">Vancouver Island</strong>.
        </p>
      </>
    ),
    resumeButton: 'Resume',
    generatePdfButton: 'Generate PDF',
    contactButton: 'Contact',
  },
  about: {
    heading: 'About me',
    description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
    to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.`,
    items: [
      {label: 'Location', text: 'Victoria, BC'},
      {label: 'Age', text: '29'},
      {label: 'Nationality', text: 'Canadian / Irish'},
      {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos'},
      {label: 'Study', text: 'University of Victoria'},
      {label: 'Employment', text: 'Instant Domains, inc.'},
    ],
  },
  resume: {
    education: 'Education',
    work: 'Work',
    skills: 'Skills',
    skillsDescription: 'Here you can show a snapshot of your skills to show off to employers',
  },
  portfolio: {
    heading: 'Check out some of my work',
    items: [
      {title: 'Project title 1', description: 'Give a short description of your project here.'},
      {title: 'Project title 2', description: 'Give a short description of your project here.'},
      {title: 'Project title 3', description: 'Give a short description of your project here.'},
      {title: 'Project title 4', description: 'Give a short description of your project here.'},
      {title: 'Project title 5', description: 'Give a short description of your project here.'},
      {title: 'Project title 6', description: 'Give a short description of your project here.'},
      {title: 'Project title 7', description: 'Give a short description of your project here.'},
      {title: 'Project title 8', description: 'Give a short description of your project here.'},
      {title: 'Project title 9', description: 'Give a short description of your project here.'},
      {title: 'Project title 10', description: 'Give a short description of your project here.'},
      {title: 'Project title 11', description: 'Give a short description of your project here.'},
    ],
  },
  education: [
    {
      date: 'April 2007',
      location: 'Clown college',
      title: 'Masters in Beer tasting',
      content: 'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
    },
    {
      date: 'March 2003',
      location: 'School of Business',
      title: 'What did you study 101',
      content: 'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
    },
  ],
  experience: [
    {
      date: 'March 2010 - Present',
      location: 'Awesome Development Company',
      title: 'Senior UX Engineer',
      content:
        'Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.',
    },
    {
      date: 'March 2007 - February 2010',
      location: 'Garage Startup Studio',
      title: 'Junior bug fixer',
      content:
        'Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.',
    },
  ],
  skills: [
    {name: 'Spoken languages', skills: [{name: 'English'}, {name: 'French'}, {name: 'Spanish'}]},
    {name: 'Frontend development', skills: [{name: 'React'}, {name: 'Typescript'}, {name: 'GraphQL'}]},
    {name: 'Backend development', skills: [{name: 'Node.js'}, {name: 'Rust'}, {name: 'Golang'}]},
    {name: 'Mobile development', skills: [{name: 'React Native'}, {name: 'Flutter'}, {name: 'Swift'}]},
  ],
  testimonials: {
    items: [
      {
        name: 'John Doe',
        text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      },
      {
        name: 'Jane Doe',
        text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      },
      {
        name: 'Someone else',
        text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      },
    ],
  },
  contact: {
    headerText: 'Get in touch.',
    description:
      'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
    items: [
      {text: 'reachout@timbaker.me'},
      {text: 'Victoria BC, Canada'},
      {text: '@tbakerx'},
      {text: 'tbakerx'},
    ],
    form: {
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      submitButton: 'Send Message',
      ariaLabel: 'Submit contact form',
    },
  },
  socials: {
    github: 'Github',
    stackOverflow: 'Stack Overflow',
    linkedIn: 'LinkedIn',
    instagram: 'Instagram',
    twitter: 'Twitter',
  },
  footer: {
    providedBy: (
      <>
        Provided by <span className="text-white">React</span>
        <span className="italic text-yellow">Resume</span>
      </>
    ),
    copyright: '© Copyright {year} Tim Baker',
  },
  ui: {
    menuButton: 'Menu Button',
    openSidebar: 'Open sidebar',
  },
};
