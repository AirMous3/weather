import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-top: 40px;

  input {
    display: block;
    width: 350px;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  button {
    margin-left: 20px;
    background-color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 0.25rem;

    &:active {
      transform: scale(0.95);
    }
  }
`;
