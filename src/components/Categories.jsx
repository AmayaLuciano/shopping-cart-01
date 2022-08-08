import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';

const Categories = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Productos
      </MenuButton>
      <MenuList>
        <MenuItem>Todos los productos</MenuItem>
        <MenuItem>Hombre</MenuItem>
        <MenuItem>Tecnologia</MenuItem>
        <MenuItem>Mujer</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Categories;
