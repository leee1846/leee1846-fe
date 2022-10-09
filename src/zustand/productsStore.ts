import create from 'zustand';
import { Product } from '../types/product';

interface IProductsStore {
  state: {
    page: number;
    products: Product[];
  };
  setProducts: ({ products }: { products: Product[] }) => void;
  plusPage: () => void;
}

const productsStore = create<IProductsStore>((set) => ({
  state: {
    page: 1,
    products: [],
  },
  setProducts: ({ products }) => {
    set((prev) => ({
      ...prev,
      state: {
        ...prev.state,
        products: prev.state.page < 2 ? products : [...prev.state.products, ...products],
      },
    }));
  },
  plusPage: () => {
    set((prev) => ({
      ...prev,
      state: {
        ...prev.state,
        page: prev.state.page + 1,
      },
    }));
  },
}));

export default productsStore;
