import {Icon, Link, Tooltip, VisuallyHidden} from '@chakra-ui/react';
import type {IconType} from 'react-icons';

export type SocialIconProps = {
  name: string;
  url: string;
  icon: IconType;
};
export default function SocialIcon({
  name,
  url,
  icon,
}: SocialIconProps): JSX.Element {
  return (
    <Tooltip label={name} aria-label={name}>
      <Link href={url} variant={'unstyled'} aria-label={name} isExternal>
        <VisuallyHidden>{name}</VisuallyHidden>
        <Icon as={icon} boxSize={5} />
      </Link>
    </Tooltip>
  );
}
