import {type NavButtonProps} from '@/components/Sidebar/SidebarNavButton';
import {SlNotebook} from 'react-icons/sl';
import {FaRegCommentDots} from 'react-icons/fa';
import {MdOutlineContactMail} from 'react-icons/md';
import {AiOutlineHome} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';

export const nav: NavButtonProps[] = [
  {
    icon: AiOutlineHome,
    itemName: 'Home',
    itemRoute: '/',
  },
  {
    icon: BsFillPersonLinesFill,
    itemName: 'About',
    itemRoute: '/about',
  },
  {
    icon: SlNotebook,
    itemName: 'Portfolio',
    itemRoute: '/portfolio',
  },
  {
    icon: FaRegCommentDots,
    itemName: 'Testimonial',
    itemRoute: '/testimonial',
  },
  {
    icon: MdOutlineContactMail,
    itemName: 'Contact',
    itemRoute: '/contact',
  },
];
export const footer = {
  name: 'Joseph',
  email: 'contact@josephchow.dev',
  emailRef: 'mailto:contact@josephchow.dev',
};
