import {
  Box,
  Button,
  Container,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Product = ({ product }) => {
  return (
    <GridItem
      bgColor={'white'}
      display={'flex'}
      flexDirection={'column'}
      gap={'16px'}
      maxH={'80vh'}
      minH={'80vh'}
    >
      <Image
        bgColor={'white'}
        w={'100%'}
        objectFit={'contain'}
        src={product.image}
        maxH={'70%'}
        minH={'65%'}
      />
      <Container p={0} gap={'6px'} h={'100%'}>
        <Text p={3} color={'black'} fontWeight={'500'} fontSize={'20px'}>
          {product.title}
        </Text>
      </Container>
      <Button
        lineHeight={'48px'}
        borderRadius={'4px'}
        fontSize={'18px'}
        fontWeight={500}
        p={[0, '16px']}
        bgColor={'blue.400'}
        color={'white'}
      >
        Agregar
      </Button>
    </GridItem>
  );
};

export default Product;
