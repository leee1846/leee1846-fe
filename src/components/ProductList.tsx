import styled from 'styled-components';
import { Product } from '../types/product';
import ProductItem from './ProductItem';
import ErrorContent from './Global/ErrorContent';
import React from 'react';

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  if (products.length < 1) {
    return <ErrorContent text={'존재하지않는 페이지입니다.'} />;
  }
  return (
    <Container>
      {products.map((product, index) => (
        <ProductItem key={`product-${index + 1}`} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-left: -20px;
`;
