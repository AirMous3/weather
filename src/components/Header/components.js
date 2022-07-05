import styled from 'styled-components';

export const Button = styled.button`
  margin-left: ${({ theme }) => theme.spaces[1]};
  background-color: #fff;
  font-weight: bold;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  padding: 14px;

  &:active {
    transform: scale(0.95);
  }
`;


export const Input = styled.input`
  display: block;
  max-width: 350px;
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
  outline: none;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spaces[2]};
  padding-top: ${({ theme }) => theme.spaces[4]};
  position: relative;

  img {
    position: absolute;
    right: 0;
    width: 50px;
  }
  ${({ theme }) => theme.below.mobileL`
    flex-direction: column;
    gap: 10px;
    
    ${Button} {
    margin: 0;
    padding: 10px;
    } 
  `}
`;
