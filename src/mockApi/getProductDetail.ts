import products from '../api/data/products.json';
import { Product } from '../types/product';

interface IGetProductDetail {
  id: string;
}

export const getProductDetail = ({ id }: IGetProductDetail) => {
  const product = products.find((product) => product.id === id);
  return product;
};
