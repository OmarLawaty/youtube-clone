import Link from 'next/link';
import { Button, Flex, Icon } from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';

import { YoutubeLogo } from './assets';
import { SearchInput } from './SearchInput';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <Flex px='4' py='2' justify='space-between'>
      <Flex align='center'>
        <Button variant='ghost' p='2' rounded='full' color='gray' onClick={onMenuClick}>
          <Icon as={RxHamburgerMenu} w='6' h='6' color='white' />
        </Button>

        <Link href='/'>
          <YoutubeLogo px='4' color='white' h='5' />
        </Link>
      </Flex>

      <Flex flex='1' justify='center'>
        <SearchInput onSearch={console.log} />
      </Flex>

      <Flex>{/* TODO: Implement Profile Picture and Logging in */}</Flex>
    </Flex>
  );
};
