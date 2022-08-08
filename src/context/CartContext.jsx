import { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState(products);
  const [isFiltered, setIsFiltered] = useState(true);

  const getData = async () => {
    const res = await Axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
    console.log(res.data);
  };
  const filterCategory = (cat) => {
    const result = products.filter((product) => {
      return product.category === cat;
    });
    setProductsFiltered(result);
    setIsFiltered(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        getData,
        filterCategory,
        isFiltered,
        productsFiltered,
        setIsFiltered,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
