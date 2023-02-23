import {type IconType} from 'react-icons';
import {motion} from 'framer-motion';
import {Button, Icon} from '@chakra-ui/react';
import {sidebarSettings} from '@/utils/settings';
import {useSidebar} from '@/context/SidebarContext';
import {useRouter} from 'next/navigation';
import {LG_SCREEN_WIDTH} from '@/utils/constants';

export type NavButtonProps = {
  icon: IconType;
  itemName: string;
  itemRoute: string;
  activeClass: 'active' | '';
};
export function SidebarNavButton({
  icon,
  itemName,
  itemRoute,
}: NavButtonProps): JSX.Element {
  const router = useRouter();
  const {width, onClose} = useSidebar();

  function handleClick(): void {
    if (width < LG_SCREEN_WIDTH) onClose();
    router.push(itemRoute);
  }

  return (
    <Button
      key={itemRoute}
      as={motion.button}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      variants={sidebarSettings.itemVariants}
      variant="sidebar"
      onClick={handleClick}
    >
      <Icon as={icon} boxSize="6" />
      {itemName}
    </Button>
  );
}

SidebarNavButton.displayName = 'SidebarNavButton';
