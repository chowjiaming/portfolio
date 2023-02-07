import {Button, ButtonGroup} from '@chakra-ui/react';
import {useSidebar} from '@/context/SidebarContext';

export default function NavbarButtons(): JSX.Element {
  const {onToggle} = useSidebar();
  return (
    <ButtonGroup>
      <Button>Dark Mode</Button>
      <Button onClick={onToggle}>Sidebar Hamburger</Button>
    </ButtonGroup>
  );
}
