import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UpcomingDaysTemp = styled.div`
  font-size: 20px;
`;
export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 20px;
    background-color: rgba(17, 59, 105, 0.71);
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
`;
