import {
  Box,
  Image,
  Grid,
  Text,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Product from './Product';

const ProductList = () => {
  const {
    products,
    setProducts,
    filterCategory,
    setIsFiltered,
    isFiltered,
    productsFiltered,
  } = useContext(CartContext);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Productos
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setIsFiltered(true)}>
            Todos los productos
          </MenuItem>
          <MenuItem onClick={() => filterCategory("men's clothing")}>
            Hombre
          </MenuItem>
          <MenuItem onClick={() => filterCategory('electronics')}>
            Tecnologia
          </MenuItem>
          <MenuItem onClick={() => filterCategory('jewelery')}>Joyas</MenuItem>
          <MenuItem onClick={() => filterCategory("women's clothing")}>
            Mujer
          </MenuItem>
        </MenuList>
      </Menu>
      <Grid
        p={'16px'}
        flex={1}
        templateColumns={'repeat(auto-fill, minmax(320px,1fr))'}
        gap={'12px'}
      >
        {isFiltered
          ? products.map((product) => (
              <Product product={product} key={product.id} />
            ))
          : productsFiltered.map((product) => (
              <Product product={product} key={product.id} />
            ))}
      </Grid>
    </>
  );
};

export default ProductList;
