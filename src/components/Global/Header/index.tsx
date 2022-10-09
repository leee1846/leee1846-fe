import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import accountStore from '../../../zustand/accountStore';
import { isEmptyString } from '../../../utilities';

const Index = () => {
  const { accessToken, name } = accountStore((selector) => selector.state);
  const setLogout = accountStore((selector) => selector.setLogout);

  const isLoggedIn = !isEmptyString(accessToken);

  const logout = () => {
    setLogout();
  };

  return (
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
  );
};

export default Index;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;
