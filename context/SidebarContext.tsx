import {type UseDisclosureReturn} from '@chakra-ui/react';
import {createContext, useContext} from 'react';

type WindowSize = {
  width: number;
  height: number;
};
export const SidebarContext = createContext<
  (UseDisclosureReturn & WindowSize) | null
>(null);

export function useSidebar(): UseDisclosureReturn & WindowSize {
  const sidebarCtx = useContext(SidebarContext);

  if (sidebarCtx === null) {
    throw new Error('useSidebar must be used within a SidebarContextProvider');
  }

  return sidebarCtx;
}
