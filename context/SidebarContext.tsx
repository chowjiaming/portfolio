import {createContext, useContext} from 'react';
import {useDisclosure} from '@chakra-ui/react';

type SidebarContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

const SidebarContextDefaultValues: SidebarContextType = {
  isOpen: false,
  onOpen: () => null,
  onClose: () => null,
  onToggle: () => null,
};

export const SidebarContext = createContext<SidebarContextType>(
  SidebarContextDefaultValues
);

export function useSidebar(): SidebarContextType {
  return useContext(SidebarContext);
}

type SidebarProviderProps = {
  children: React.ReactNode;
};
export function SidebarProvider({children}: SidebarProviderProps): JSX.Element {
  const {isOpen, onOpen, onClose, onToggle} = useDisclosure();

  return (
    <SidebarContext.Provider value={{isOpen, onOpen, onClose, onToggle}}>
      {children}
    </SidebarContext.Provider>
  );
}
