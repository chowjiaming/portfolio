import {type IconType} from 'react-icons';
import {Icon, Link, Tooltip, VisuallyHidden} from '@chakra-ui/react';

export type SocialIconProps = {
  name: string;
  url: string;
  icon: IconType;
};
export function SocialIcon({name, url, icon}: SocialIconProps): JSX.Element {
  return (
    <Tooltip label={name} aria-label={name}>
      <Link href={url} variant={'unstyled'} aria-label={name} isExternal>
        <VisuallyHidden>{name}</VisuallyHidden>
        <Icon as={icon} boxSize={5} />
      </Link>
    </Tooltip>
  );
}

SocialIcon.displayName = 'SocialIcon';
