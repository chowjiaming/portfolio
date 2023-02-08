import {SocialIconProps} from '@/components/Pages/Hero/SocialIcon';
import {FaGithub, FaLinkedin, FaTwitter, FaMailBulk} from 'react-icons/fa';

export const content = {
  heroImage: '/img/hero.png',
  name: 'Joseph',
  description: `I'm a Front End Web Developer based in Toronto, Canada. I'm passionate about building beautiful, responsive websites and applications. I'm currently looking for a full-time position as a Front End Developer.`,
};

export const social: SocialIconProps[] = [
  {
    name: 'Github',
    url: 'https://github.com/chowjiaming/',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chowjiaming/',
    icon: FaLinkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/chowjiaming',
    icon: FaTwitter,
  },
  {
    name: 'Email',
    url: 'mailto:contact@josephchow.dev',
    icon: FaMailBulk,
  },
];
