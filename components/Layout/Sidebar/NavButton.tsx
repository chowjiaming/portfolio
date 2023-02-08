import {motion} from 'framer-motion';
import {Button} from '@chakra-ui/react';
import {sidebarSettings} from '@/utils/settings';
import Image from 'next/image';

export type NavButtonProps = {
  icon: string;
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
      <Image
        src={`svg/${icon}.svg`}
        alt={itemName}
        width={20}
        height={20}
        style={{
          width: 'auto',
          height: 'auto',
        }}
      />
      {itemName}
    </Button>
  );
}
