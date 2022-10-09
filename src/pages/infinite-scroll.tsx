import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import productsStore from '../zustand/productsStore';
import { getProducts } from '../mockApi/getProducts';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const PRODUCT_COUNT_PER_PAGE = 16;

const InfiniteScrollPage: NextPage = () => {
  const [hasNext, setHasNext] = useState(true);

  const productState = productsStore((selector) => selector.state);
  const setProducts = productsStore((selector) => selector.setProducts);
  const plusPage = productsStore((selector) => selector.plusPage);
  const { page } = productState;

  const { setObserverRef } = useIntersectionObserver({
    callback: () => {
      plusPage();
    },
    hasNext,
  });

  useEffect(() => {
    const response = getProducts({ page, count: PRODUCT_COUNT_PER_PAGE });

    setHasNext(response.hasNext);
    setProducts({ products: response.products });
  }, [page]);

  return (
    <Container>
      <ProductList products={productState.products} />
      <div ref={setObserverRef} />
    </Container>
  );
};

export default InfiniteScrollPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
