import {Button, ButtonGroup, useColorMode} from '@chakra-ui/react';
import {motion, SVGMotionProps} from 'framer-motion';
import {useSidebar} from '@/context/SidebarContext';
import {RefAttributes} from 'react';
import ColorModeToggle from '@/components/Shared/ColorModeToggle';
import {STANDARD_MARGIN} from '@/utils/constants';

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement> & {
      isDarkMode: boolean;
    }
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.isDarkMode ? 'hsl(360, 100%, 100%)' : 'hsl(0, 0%, 18%)'}
    strokeLinecap="round"
    {...props}
  />
);

export default function NavbarButtons(): JSX.Element {
  const {isOpen, onToggle} = useSidebar();
  const {colorMode} = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <ButtonGroup spacing={STANDARD_MARGIN}>
      <ColorModeToggle />
      <Button
        as={motion.button}
        variant={'unstyled'}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        onClick={onToggle}
      >
        <svg width="27" height="23" viewBox="0 0 20 20">
          <Path
            variants={{
              closed: {d: 'M 2 2.5 L 20 2.5'},
              open: {d: 'M 3 16.5 L 17 2.5'},
            }}
            isDarkMode={isDarkMode}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: {opacity: 1},
              open: {opacity: 0},
            }}
            transition={{duration: 0.1}}
            isDarkMode={isDarkMode}
          />
          <Path
            variants={{
              closed: {d: 'M 2 16.346 L 20 16.346'},
              open: {d: 'M 3 2.5 L 17 16.346'},
            }}
            isDarkMode={isDarkMode}
          />
        </svg>
      </Button>
    </ButtonGroup>
  );
}
