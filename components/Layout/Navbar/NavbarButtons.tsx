import {useRef} from 'react';
import {Button, ButtonGroup} from '@chakra-ui/react';
import {motion, SVGMotionProps} from 'framer-motion';
import {useSidebar} from '@/context/SidebarContext';
import {RefAttributes} from 'react';
import ColorModeToggle from '@/components/Shared/ColorModeToggle';
import {STANDARD_MARGIN} from '@/utils/constants';

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export default function NavbarButtons(): JSX.Element {
  const containerRef = useRef(null);
  const {isOpen, onToggle} = useSidebar();
  return (
    <ButtonGroup spacing={STANDARD_MARGIN}>
      <ColorModeToggle />
      <Button
        as={motion.button}
        variant={'unstyled'}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
        onClick={onToggle}
      >
        <svg width="27" height="23" viewBox="0 0 20 20">
          <Path
            variants={{
              closed: {d: 'M 2 2.5 L 20 2.5'},
              open: {d: 'M 3 16.5 L 17 2.5'},
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: {opacity: 1},
              open: {opacity: 0},
            }}
            transition={{duration: 0.1}}
          />
          <Path
            variants={{
              closed: {d: 'M 2 16.346 L 20 16.346'},
              open: {d: 'M 3 2.5 L 17 16.346'},
            }}
          />
        </svg>
      </Button>
    </ButtonGroup>
  );
}
