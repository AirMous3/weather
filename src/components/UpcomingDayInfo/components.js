import styled from 'styled-components';

export const UpcomingDayInfoContainer = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[1]};
`;

export const UpcomingDayInfoUlWrapper = styled.ul`
  font-size: ${({ theme }) => theme.fontSize[0]};
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding-top: ${({ theme }) => theme.spaces[2]};
  padding-bottom: ${({ theme }) => theme.spaces[2]};
  padding-left: 0;

  li {
    list-style-type: none;
    margin-bottom: ${({ theme }) => theme.spaces[4]};
  }
`;

export const UpcomingDayInfoTitle = styled.div`
  padding-top: ${({ theme }) => theme.spaces[4]};
  padding-bottom: ${({ theme }) => theme.spaces[2]};
`;
