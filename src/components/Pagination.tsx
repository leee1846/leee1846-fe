import React from 'react';
import styled from 'styled-components';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { useRouter } from 'next/router';

interface IPagination {
  pages: any[];
  currentPage: number;
  isFirst: boolean;
  isLast: boolean;
}
const Pagination = ({ pages, currentPage, isFirst, isLast }: IPagination) => {
  const router = useRouter();

  const onClickPage = (page: number) => {
    router.push(`/pagination?page=${page}`);
  };

  const onClickArrowBtn = ({ type }: { type: 'prev' | 'next' }) => {
    if (type === 'prev') {
      router.push(`/pagination?page=${pages[0] - 1 || 1}`);
      return;
    }

    router.push(`/pagination?page=${pages[pages.length - 1] + 1}`);
  };

  return (
    <Container>
      <Button type={'button'} onClick={() => onClickArrowBtn({ type: 'prev' })} disabled={isFirst}>
        <VscChevronLeft />
      </Button>
      <PageWrapper>
        {pages.map((page, index) => (
          <Page
            type={'button'}
            key={`pagination-${index + 1}`}
            selected={page === currentPage}
            disabled={page === currentPage}
            onClick={() => onClickPage(page)}
          >
            {page}
          </Page>
        ))}
      </PageWrapper>
      <Button onClick={() => onClickArrowBtn({ type: 'next' })} disabled={isLast}>
        <VscChevronRight />
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

const Button = styled.button`
  &:disabled {
    color: #e2e2ea;
    cursor: default;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

type PageType = {
  selected: boolean;
};

const Page = styled.button<PageType>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;

  & + & {
    margin-left: 4px;
  }

  &:disabled {
    cursor: default;
  }
`;
