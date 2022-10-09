import styled from 'styled-components';
import { Product } from '../types/product';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  if (products.length < 1) {
    return (
      <ErrorContainer>
        <p>존재하지않는 페이지입니다.</p>
      </ErrorContainer>
    );
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

const ErrorContainer = styled.ul`
  height: calc(100vh - 212px);
  width: 100%;
  position: relative;

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-left: -20px;
`;
