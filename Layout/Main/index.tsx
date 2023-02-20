import type {FlexProps} from '@chakra-ui/react';
import {Flex} from '@chakra-ui/react';
import {NAVBAR_HEIGHT, SIDEBAR_WIDTH} from '@/utils/constants';

export function Main(props: FlexProps): JSX.Element {
  return (
    <Flex
      as="main"
      role="main"
      direction="column"
      pl={{
        base: 0,
        lg: SIDEBAR_WIDTH,
      }}
      pt={{
        base: NAVBAR_HEIGHT,
        lg: 0,
      }}
      {...props}
    >
      {props.children}
    </Flex>
  );
}

Main.displayName = 'Main';
