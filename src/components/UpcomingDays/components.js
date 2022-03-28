import styled from 'styled-components';

export const UpcomingDaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  background: rgba(0,0,0,0.3);
  border-radius: 5px;
  padding-top: ${({ theme }) => theme.spaces[2]};
  padding-bottom: ${({ theme }) => theme.spaces[2]};
`;

export const CurrentDayContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spaces[5]};

  img {
    margin-right: ${({ theme }) => theme.spaces[2]};
  }
`;

export const TodayTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces[2]};

  span {
    padding-right: ${({ theme }) => theme.spaces[1]};
    padding-left: ${({ theme }) => theme.spaces[1]};
    border-radius: 20px;
    background-color: rgba(17, 59, 105, 0.71);
  }
`;
export const TodayTemp = styled.div`
  font-size: ${({ theme }) => theme.fontSize[1]};
`;
