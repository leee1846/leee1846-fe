interface IUsePagination {
  // 현재 페이지
  currentPage: number;
  //페이지네이션 갯수
  pageCount: number;
  //페이지당 보여줄 상품 수
  itemCount: number;
  // 상품의 모든 갯수
  totalLength: number;
}
const usePagination = ({ currentPage, pageCount, itemCount, totalLength }: IUsePagination) => {
  const pageGroup = Math.ceil(currentPage / pageCount);
  const lastPageOfPageGroup = pageGroup * pageCount;
  const firstPageOfPageGroup = lastPageOfPageGroup - (pageCount - 1);
  const lastPage = Math.ceil(totalLength / itemCount);

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
    // 1번 페이지가 아닌  첫번째 페이지 그룹
    isFirst: firstPageOfPageGroup < 2,
    // 마지막 페이지가 아닌 마지막 페이지 그룹
    isLast: lastPageOfPageGroup >= lastPage,
  };
};

export default usePagination;
