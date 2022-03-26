import styled from 'styled-components';

export const UpcomingDaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
`;

export const CurrentDayContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  img {
    margin-right: 20px;
  }
`;

export const TodayTitle = styled.div`
  margin-bottom: 20px;

  span {
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 20px;
    background-color: rgba(17, 59, 105, 0.71);
  }
`;
export const TodayTemp = styled.div`
  font-size: 40px;
`;
