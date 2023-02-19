import {motion} from 'framer-motion';
import {Button, Icon} from '@chakra-ui/react';
import {sidebarSettings} from '@/utils/settings';
import type {IconType} from 'react-icons';

export type NavButtonProps = {
  icon: IconType;
  itemName: string;
  itemRoute: string;
  activeClass: 'active' | '';
};
export default function NavButton({
  icon,
  itemName,
  itemRoute,
}: NavButtonProps): JSX.Element {
  return (
    <Button
      key={itemRoute}
      as={motion.a}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      variants={sidebarSettings.itemVariants}
      href={itemRoute}
      variant={'sidebar'}
    >
      <Icon as={icon} boxSize={6} />
      {itemName}
    </Button>
  );
}
