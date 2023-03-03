import {Flex, useColorMode} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';
import {AnimatePresence, motion} from 'framer-motion';
import {enterExitSpin, sidebarSettings} from '@/utils/settings';
import {AnimatedIconButton} from '@/components/Shared/AnimatedIconButton';

export function ColorModeToggle(): JSX.Element {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Flex
      as={motion.div}
      variants={sidebarSettings.itemVariants}
      align="center"
    >
      <AnimatePresence>
        {isDarkMode ? (
          <AnimatedIconButton
            icon={FaSun}
            label="Light mode"
            colour="yellow.400"
            variants={enterExitSpin}
            onClick={toggleColorMode}
          />
        ) : (
          <AnimatedIconButton
            icon={FaMoon}
            label="Dark mode"
            colour="gray.400"
            variants={enterExitSpin}
            onClick={toggleColorMode}
          />
        )}
      </AnimatePresence>
    </Flex>
  );
}

ColorModeToggle.displayName = 'ColorModeToggle';
