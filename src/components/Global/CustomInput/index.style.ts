import styled from 'styled-components';

export const CustomInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 13px;
  color: #6c6c7d;
`;

interface IInput {
  isError: boolean;
}
export const Input = styled.input<IInput>`
  padding: 16px;
  background: ${({ isError }) => (isError ? '#fdedee' : '#f7f7fa')};
  border-radius: 12px;
`;

export const ErrorMessage = styled.span`
  font-weight: 400;
  font-size: 13px;
  color: #ed4e5c;
`;
