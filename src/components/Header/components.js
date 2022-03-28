import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spaces[2]};
  padding-top: ${({ theme }) => theme.spaces[4]};

  input {
    display: block;
    width: 350px;
    height: calc(2.25rem + 2px);
    padding: ${({ theme }) => theme.spaces[1]};
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSize[0]};
    font-weight: 400;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  button {
    margin-left: ${({ theme }) => theme.spaces[2]};
    background-color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 0.25rem;

    &:active {
      transform: scale(0.95);
    }
  }
`;
