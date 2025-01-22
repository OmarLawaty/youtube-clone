import { useState } from 'react';
import { Button, Flex, Icon, Input, type InputProps } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';

interface SearchInputProps extends InputProps {
  onSearch: (search: string) => void;
}

export const SearchInput = ({ onSearch, ...props }: SearchInputProps) => {
  const [search, setSearch] = useState('');

  return (
    <Flex>
      <Input
        w='33.5rem'
        ps='4'
        roundedStart='full'
        roundedEnd='0'
        placeholder='Search'
        fontSize='1rem'
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        {...props}
        _focus={{
          borderColor: 'blue.800',
          ...props._focus,
        }}
      />

      <Button
        roundedStart='0'
        roundedEnd='full'
        borderColor='hsl(0,0%,18.82%)'
        borderStartWidth='0'
        bg='hsla(0, 0%, 100%, 0.08)'
        color='white'
        onClick={() => onSearch(search)}
        px='5'
      >
        <Icon as={CiSearch} w='6' h='6' color='white' />
      </Button>
    </Flex>
  );
};
