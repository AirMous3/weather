import styled from 'styled-components';

export const CurrentDayTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spaces[5]};
`;

export const CurrentDayTime = styled.div`
  font-size: ${({ theme }) => theme.fontSize[2]};
  margin-bottom: ${({ theme }) => theme.spaces[4]};
`;

export const CurrentDayWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize[0]};
`;

export const CurrentDayCity = styled.div`
  font-size: ${({ theme }) => theme.fontSize[1]};
`;

export const CurrentDayCountry = styled.div`
  font-size: ${({ theme }) => theme.fontSize[0]};
  float: right;
`;

export const CurrentDayDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize[0]};

  li {
    list-style-type: none;
    margin-bottom: ${({ theme }) => theme.spaces[1]};
  }
`;
