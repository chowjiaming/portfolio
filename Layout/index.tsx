import {Box, type BoxProps, useDisclosure} from '@chakra-ui/react';
import {useSize} from '@chakra-ui/react-use-size';
import {useRef} from 'react';
import {NavContext} from '@/context';
import {Navbar} from '@/Layout/Navbar';
import {Sidebar} from '@/Layout/Sidebar';
import {Main} from '@/Layout/Main';

export function Layout(props: BoxProps): JSX.Element {
  const sidebarDisclosure = useDisclosure();
  const elementRef = useRef(null);
  const dimensions = useSize(elementRef);
  const windowSize = dimensions ?? {width: 0, height: 0};

  return (
    <Box ref={elementRef} role="application" minH="100vh" {...props}>
      <NavContext.Provider value={{...sidebarDisclosure, ...windowSize}}>
        <Navbar />
        <Sidebar />
        <Main>{props.children}</Main>
      </NavContext.Provider>
    </Box>
  );
}

Layout.displayName = 'Layout';
