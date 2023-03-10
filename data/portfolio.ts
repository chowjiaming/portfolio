import {type Project} from '@/utils/types';

export const intro = {
  heading: 'Portfolio',
  paragraph:
    'Here is a showcase of my work and demonstrate the impact that I have made as a front-end developer. Each project is a testament to my skills, creativity, and commitment to delivering high-quality solutions. I have had the opportunity to work on a variety of projects, ranging from a simple SPA to complex web applications, and have consistently exceeded expectations. My projects speak for themselves, and I am confident that they will give you a good idea of the level of quality that I can bring to your team. Take a look and see what I can do for you!',
};

export const content: Project[] = [
  {
    title: 'Tip Calculator App',
    image: '/img/screenshots/tip-calculator-tablet.png',
    imageWidth: 616,
    imageHeight: 885,
    github: 'https://github.com/chowjiaming/tip-calculator-app-react',
    link: 'https://tip-calculator-app-chowjiaming.netlify.app/',
    shortDesc:
      'A tip calculator app that lets users determine their share of the tip. Built with React and TypeScript.',
    longDesc:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['Preact', 'Signals', 'TypeScript', 'Styled Components'],
  },
  {
    title: 'Countries Info App',
    image: '/img/screenshots/where-in-the-world-tablet.png',
    imageWidth: 616,
    imageHeight: 885,
    github: 'https://github.com/chowjiaming/where-in-the-world',
    link: 'https://where-in-the-world-by-chowjiaming.netlify.app/',
    shortDesc:
      'Country info app that lets users filter and search for basic countries information. Built with React and TypeScript.',
    longDesc:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['NextJS', 'TypeScript', 'ChakraUI'],
  },
  {
    title: 'Languages Flashcard App',
    image: '/img/screenshots/1000-words-tablet.png',
    imageWidth: 616,
    imageHeight: 885,
    github: 'https://github.com/chowjiaming/1000WORDS',
    link: 'https://onethousandwords.netlify.app/',
    shortDesc:
      'A flashcards app built to help the user get their feet wet learning a new language. Built with React and TypeScript.',
    longDesc:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['Preact', 'Signals', 'TypeScript', 'Styled Components'],
  },
];
