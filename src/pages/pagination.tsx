import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';
import { useRouter } from 'next/router';
import { getProducts } from '../mockApi/getProducts';
import { Product } from '../types/product';

const PRODUCT_COUNT_PER_PAGE = 10;
const PAGE_COUNT = 5;

const PaginationPage: NextPage = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 1;

  const [products, setProducts] = useState<Product[]>([]);
  const [totalProductsLength, setTotalProductsLength] = useState(0);

  useEffect(() => {
    //페이지 변경시 상품 가져오기
    const response = getProducts({ page: Number(page) || 1, count: PRODUCT_COUNT_PER_PAGE });

    setTotalProductsLength(response.totalLength);
    setProducts(response.products);
  }, [page]);

  // pagination hook
  const { currentPage, pages, isFirst, isLast } = usePagination({
    currentPage: page,
    pageCount: PAGE_COUNT,
    itemCount: PRODUCT_COUNT_PER_PAGE,
    totalLength: totalProductsLength,
  });

  return (
    <Container>
      <ProductList products={products} />
      <Pagination pages={pages} currentPage={currentPage} isFirst={isFirst} isLast={isLast} />
    </Container>
  );
};

export default PaginationPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
