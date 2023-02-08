import {NavButtonProps} from '@/components/Layout/Sidebar/NavButton';

export const nav: NavButtonProps[] = [
  {icon: 'home', itemName: 'Home', itemRoute: '#home', activeClass: 'active'},
  {icon: 'human', itemName: 'About', itemRoute: '#about', activeClass: ''},
  {
    icon: 'portfolio',
    itemName: 'Portfolio',
    itemRoute: '#portfolio',
    activeClass: '',
  },
  {
    icon: 'testimonial',
    itemName: 'Testimonial',
    itemRoute: '#testimonial',
    activeClass: '',
  },
  {
    icon: 'contact',
    itemName: 'Contact',
    itemRoute: '#contact',
    activeClass: '',
  },
];
export const footer = {
  name: 'Joseph',
  email: 'contact@josephchow.dev',
  emailRef: 'mailto:contact@josephchow.dev',
};
