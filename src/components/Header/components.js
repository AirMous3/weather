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

export const Select = styled.select`
  border: 1px solid #bdbdbd;
  outline: none;
  border-radius: 0.25rem;
  padding: ${({ theme }) => theme.spaces[1]};
  font-size: ${({ theme }) => theme.fontSize[0]};
  margin-left: ${({ theme }) => theme.spaces[1]};
`;

export const Input = styled.input`
  display: block;
  width: 350px;
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

  ${({ theme }) => theme.below.mobileL`
    flex-direction: column;
    gap: 10px;
    
    ${Select} {
    margin: 0;
    }
      
    ${Button} {
    margin: 0;
    padding: 10px;
    } 
  `}
  ${({ theme }) => theme.below.mobileM`
    ${Input}{
     width: 200px
    }   
  `}
`;
