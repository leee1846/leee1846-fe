import React from 'react';
import styled from 'styled-components';

interface IErrorContent {
  text: string;
}
const ErrorContent = ({ text }: IErrorContent) => {
  return (
    <ErrorContainer>
      <p>{text}</p>
    </ErrorContainer>
  );
};

export default ErrorContent;

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
