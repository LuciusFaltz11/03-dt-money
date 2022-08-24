import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['white']};
  font-size: 1rem;
  border-radius: 6px;
  padding: 0.675rem 1.25rem;
  font-weight: bold;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
  }
`;
