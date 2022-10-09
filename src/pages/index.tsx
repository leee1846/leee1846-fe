import Link from 'next/link';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import accountStore from '../zustand/accountStore';
import { isEmptyString } from '../utilities';

const HomePage: NextPage = () => {
  const { accessToken, name } = accountStore((selector) => selector.state);
  const setLogout = accountStore((selector) => selector.setLogout);

  const isLoggedIn = !isEmptyString(accessToken);

  const logout = () => {
    setLogout();
  };

  return (
    <>
      <Header>
        <Link href='/'>
          <Title>HAUS</Title>
        </Link>
        {isLoggedIn && (
          <div>
            <p>{name}</p>
            <button type={'button'} onClick={logout}>
              logout
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <Link href='/login'>
            <p>login</p>
          </Link>
        )}
      </Header>
      <Container>
        <Link href='/pagination?page=1'>
          <StyledLink>pagination</StyledLink>
        </Link>
        <Link href='/infinite-scroll'>
          <StyledLink>infinite scroll</StyledLink>
        </Link>
      </Container>
    </>
  );
};

export default HomePage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 40px;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  width: 240px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;
  font-size: 24px;

  & + & {
    margin-top: 40px;
  }
`;
