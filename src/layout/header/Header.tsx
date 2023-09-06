import { Menu } from '../../components/menu/Menu';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Theme';
import { MobileMenu } from './mobileMenu/MobileMenu';

const items = ['Home', 'Skills', 'Works', 'Education', 'Contact'];

export const Header = () => {
  return (
    <>
    <StyledHeader>
      <Container>
        <Menu menuItems={items} />
      </Container>
    </StyledHeader>
    
      <MobileMenu menuItems={items} />
    </>
  );
};

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 0;
  position: fixed;
  top: 0;
  background-color: #ededf9;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1277px;
  width: 100%;

  @media ${theme.media.tablet} {
    display: none;
  }
`;
