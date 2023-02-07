import {createContext, useContext} from 'react';
import {useDisclosure} from '@chakra-ui/react';

type SidebarContextType = {
  isOpen: boolean;
  onToggle: () => void;
};

const SidebarContextDefaultValues: SidebarContextType = {
  isOpen: false,
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
  const {isOpen, onToggle} = useDisclosure();

  return (
    <SidebarContext.Provider value={{isOpen, onToggle}}>
      {children}
    </SidebarContext.Provider>
  );
}
