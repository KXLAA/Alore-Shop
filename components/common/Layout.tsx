import styled from 'styled-components';
import device from './MediaQueries';
const Container = styled.div``;

export const LayoutStyled = styled.main`
  max-width: 1720px;
  width: 100%;
  padding: 48px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 24px;
  }
`;

const Layout = ({ children }: React.PropsWithChildren<Record<never, any>>) => {
  return (
    <LayoutStyled>
      <Container>{children}</Container>
    </LayoutStyled>
  );
};

export default Layout;
