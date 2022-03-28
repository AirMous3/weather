import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  background-image: url(${({ theme, mode }) => theme[mode] || theme.defaultImage});
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding-left: ${({ theme }) => theme.spaces[4]};
  padding-right: ${({ theme }) => theme.spaces[4]};
`;
