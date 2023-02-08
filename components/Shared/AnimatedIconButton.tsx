import {IconButton, Tooltip, chakra, ColorProps} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import type {Variants} from 'framer-motion';
import type {IconType} from 'react-icons';

type AnimatedIconProps = {
  icon: IconType;
  label: string;
  colour: ColorProps['color'];
  variants: Variants;
  onClick: () => void;
};
export default function AnimatedIconButton({
  icon,
  label,
  colour,
  variants,
  onClick,
}: AnimatedIconProps): JSX.Element {
  return (
    <Tooltip label={label}>
      <MotionButton
        key={icon.name}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        display={'flex'}
        alignItems={'center'}
      >
        <IconButton
          as={icon}
          aria-label={label}
          variant={'unstyled'}
          size={'sm'}
          color={colour}
          onClick={onClick}
        />
      </MotionButton>
    </Tooltip>
  );
}

const MotionButton = chakra(motion.button);
