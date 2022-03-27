import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
  height: 100%;
`;
export const Main = styled.main`
  min-height: 100vh;
  background-image: url(${({ theme, mode }) => theme[mode] || theme.defaultImage});
`;
