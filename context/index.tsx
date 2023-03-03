import {type UseDisclosureReturn} from '@chakra-ui/react';
import {createContext, useContext} from 'react';

type WindowSize = {
  width: number;
  height: number;
};
export const NavContext = createContext<
  (UseDisclosureReturn & WindowSize) | null
>(null);

export function useNav(): UseDisclosureReturn & WindowSize {
  const navCtx = useContext(NavContext);

  if (navCtx === null) {
    throw new Error('useNav must be used within a SidebarContextProvider');
  }

  return navCtx;
}
