import products from '../api/data/products.json';
import { Product } from '../types/product';

interface IGetProducts {
  page: number;
  count: number;
}

export const getProducts = ({
  page,
  count,
}: IGetProducts): { products: Product[]; hasNext: boolean; totalLength: number } => {
  const from = (page - 1) * count;
  const to = page * count;
  const totalLength = products.length;

  return {
    products: products.slice(from, to),
    hasNext: to < totalLength,
    totalLength,
  };
};
