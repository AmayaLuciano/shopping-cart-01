import { useEffect, useState } from 'react';
import { Container, Text, Image } from '@chakra-ui/react';
import Axios from 'axios';
import ProductList from './components/ProductList';
import Categories from './components/Categories';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Container
        maxW={'1250px'}
        minHeight={'100vh'}
        m={'auto'}
        bgColor={'blackAlpha.300'}
      >
        <Text>Shopping Cart 1.0</Text>
        <ProductList />
      </Container>
    </CartProvider>
  );
}

export default App;
