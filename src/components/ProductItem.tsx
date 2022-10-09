import styled from 'styled-components';

import { Product } from '../types/product';
import { withComma } from '../utilities';
import Link from 'next/link';
import Image from 'next/image';

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product: { id, name, thumbnail, price } }: ProductItemProps) => (
  <Container>
    <Link href={`/products/${id}`}>
      <a>
        <Thumbnail src={thumbnail ? thumbnail : '/defaultThumbnail.jpg'} width={500} height={500} />
        <Name>{name}</Name>
        <Price>{withComma(price)}</Price>
      </a>
    </Link>
  </Container>
);

export default ProductItem;

const Container = styled.li`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
  list-style: none;
`;

const Thumbnail = styled(Image)`
  width: 100%;
  height: 180px;
`;

const Name = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

const Price = styled.div`
  margin-top: 4px;
`;
