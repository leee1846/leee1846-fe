import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../types/product';
import { withComma } from '../../utilities';
import { useRouter } from 'next/router';
import { getProductDetail } from '../../mockApi/getProductDetail';
import ErrorContent from '../../components/Global/ErrorContent';

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id === undefined || typeof id !== 'string') {
      return;
    }

    const response = getProductDetail({ id });
    if (response) {
      setProduct(response);
    }
  }, [id]);

  if (!product) {
    return <ErrorContent text={'존재하지않는 상품입니다.'} />;
  }
  return (
    <>
      <Thumbnail src={product.thumbnail ? product.thumbnail : '/defaultThumbnail.jpg'} />
      <ProductInfoWrapper>
        <Name>{product.name}</Name>
        <Price>{withComma(product.price)}원</Price>
      </ProductInfoWrapper>
    </>
  );
};

export default ProductDetailPage;

const Thumbnail = styled.img`
  width: 100%;
  height: 420px;
`;

const ProductInfoWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 18px;
  margin-top: 8px;
`;
