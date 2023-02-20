import type {BoxProps} from '@chakra-ui/react';
import {Box} from '@chakra-ui/react';
import {useSize} from '@chakra-ui/react-use-size';
import {useRef, useEffect} from 'react';
import {useSidebar} from '@/context/SidebarContext';
import {Navbar} from '@/Layout/Navbar';
import {Sidebar} from '@/Layout/Sidebar';
import {Main} from '@/Layout/Main';

export default function Layout(props: BoxProps): JSX.Element {
  const elementRef = useRef(null);
  const dimensions = useSize(elementRef);
  const {onOpen, onClose} = useSidebar();

  useEffect(() => {
    if (!dimensions) return;
    if (dimensions.width > 992) onOpen();
    else onClose();
    return () => onClose();
  }, [dimensions, onOpen, onClose]);

  return (
    <Box minH="100vh" ref={elementRef} {...props}>
      <Navbar />
      <Sidebar />
      <Main>{props.children}</Main>
    </Box>
  );
}
