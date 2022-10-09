import { useEffect, useState } from 'react';
import products from '../api/data/products.json';
import { useRouter } from 'next/router';

const PRODUCT_COUNT_PER_PAGE = 10;
const PAGE_COUNT = 5;

const usePagination = () => {
  const router = useRouter();
  const { page } = router.query;

  const [currentPage, setCurrentPage] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<any[]>([]);

  useEffect(() => {
    if (page && typeof page === 'string') {
      setCurrentPage(Number(page) || 1);
    }
  }, [page]);

  useEffect(() => {
    setCurrentProducts(() => {
      return products.slice(
        (currentPage - 1) * PRODUCT_COUNT_PER_PAGE,
        currentPage * PRODUCT_COUNT_PER_PAGE
      );
    });
  }, [currentPage]);

  const pageGroup = Math.ceil(currentPage / PAGE_COUNT);
  const lastPageOfPageGroup = pageGroup * PAGE_COUNT;
  const firstPageOfPageGroup = lastPageOfPageGroup - (PAGE_COUNT - 1);
  const productTotalLength = products.length;
  const lastPage = Math.ceil(productTotalLength / PRODUCT_COUNT_PER_PAGE);

  const pages = () => {
    let result = [];
    for (let i = firstPageOfPageGroup; i <= lastPageOfPageGroup; i++) {
      if (i > lastPage) {
        break;
      }
      result.push(i);
    }
    return result;
  };

  return {
    currentPage,
    pages: pages(),
    currentProducts,
    isFirst: firstPageOfPageGroup < 2,
    isLast: lastPageOfPageGroup >= lastPage,
  };
};

export default usePagination;
