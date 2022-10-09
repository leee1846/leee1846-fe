import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';

const PaginationPage: NextPage = () => {
  const { currentPage, pages, currentProducts, isFirst, isLast } = usePagination();

  return (
    <Container>
      <ProductList products={currentProducts} />
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
