import Link from 'next/link';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Global/CustomInput';
import { validateIdType, validatePwType } from '../utilities/regexUtil';
import { errorMessages } from '../constants/messages';
import { isEmptyString } from '../utilities';
import { postLogin } from '../mockApi/postLogin';
import accountStore from '../zustand/accountStore';
import { useRouter } from 'next/router';

const LoginPage: NextPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({ id: '', pw: '' });
  const [errors, setErrors] = useState({ id: '', pw: '' });

  const setLogin = accountStore((selector) => selector.setLogin);
  const accessToken = accountStore((selector) => selector.state.accessToken);

  useEffect(() => {
    if (accessToken) {
      router.push('/');
    }
  }, [accessToken]);

  const changeFormData = ({ key, value }: { key: 'id' | 'pw'; value: string }) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const setError = ({ key, value }: { key: 'id' | 'pw'; value: string }) => {
    setErrors((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const checkIdError = (e: { target: { value: string } }) => {
    const value = e.target.value;

    if (!validateIdType(value) || value.trim().length < 6 || value.trim().length > 30) {
      setError({ key: 'id', value: errorMessages.WrongTypeId });
      return;
    }

    setError({ key: 'id', value: '' });
  };

  const checkPwError = (e: { target: { value: string } }) => {
    const value = e.target.value;

    if (!validatePwType(value) || value.trim().length < 8 || value.trim().length > 30) {
      setError({ key: 'pw', value: errorMessages.WrongTypePw });
      return;
    }

    setError({ key: 'pw', value: '' });
  };

  const LoginBtnEnabledCondition = () => {
    return (
      !isEmptyString(formData.id) &&
      !isEmptyString(formData.pw) &&
      isEmptyString(errors.pw) &&
      isEmptyString(errors.id)
    );
  };

  const onLogin = () => {
    const response = postLogin(formData);

    if (response.error || !response.accessToken || !response.user?.name) {
      window.alert(errorMessages.Not_Found);
      return;
    }

    const { accessToken, user } = response;
    setLogin({ accessToken, name: user.name });
    router.push('/');
  };

  return (
    <>
      <Header>
        <Link href='/'>
          <Title>HAUS</Title>
        </Link>
        <Link href='/login'>
          <p>login</p>
        </Link>
      </Header>
      <Form>
        <Input
          title={'아이디'}
          type={'text'}
          value={formData.id}
          placeholder={'ID'}
          id={'account-id'}
          errorMessage={errors.id}
          onBlur={checkIdError}
          onChange={(e) => changeFormData({ key: 'id', value: e.target.value })}
        />
        <Input
          title={'비밀번호'}
          type={'password'}
          value={formData.pw}
          placeholder={'PASSWORD'}
          id={'account-pw'}
          errorMessage={errors.pw}
          onBlur={checkPwError}
          onChange={(e) => changeFormData({ key: 'pw', value: e.target.value })}
        />
        <LoginButton type={'button'} disabled={!LoginBtnEnabledCondition()} onClick={onLogin}>
          로그인
        </LoginButton>
      </Form>
    </>
  );
};

export default LoginPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const TextInput = styled.input`
  border: 1px solid #000;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
