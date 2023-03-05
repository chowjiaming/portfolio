import {type IconType} from 'react-icons';
import {motion} from 'framer-motion';
import {Button, Icon} from '@chakra-ui/react';
import {sidebarMotion} from '@/utils/motion';
import {useNav} from '@/context';
import {useRouter as useNavigation} from 'next/navigation';
import {useRouter} from 'next/router';
import {LG_SCREEN_WIDTH} from '@/utils/constants';

export type NavButtonProps = {
  icon: IconType;
  itemName: string;
  itemRoute: string;
};
export function SidebarNavButton({
  icon,
  itemName,
  itemRoute,
}: NavButtonProps): JSX.Element {
  const navigation = useNavigation();
  const router = useRouter();
  const {width, onClose} = useNav();

  function handleClick(): void {
    if (width < LG_SCREEN_WIDTH) onClose();
    navigation.push(itemRoute);
  }

  return (
    <Button
      key={itemRoute}
      as={motion.button}
      whileHover={{scale: router.pathname === itemRoute ? 1 : 1.015}}
      whileTap={{scale: router.pathname === itemRoute ? 1 : 0.995}}
      variants={sidebarMotion.itemVariants}
      variant={router.pathname === itemRoute ? 'sidebarActive' : 'sidebar'}
      onClick={handleClick}
    >
      <Icon as={icon} boxSize="6" />
      {itemName}
    </Button>
  );
}

SidebarNavButton.displayName = 'SidebarNavButton';
