import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { MobileMenu } from './mobileMenu/MobileMenu';
import {S} from '../header/Header_Styles'

const items = ['Home', 'Skills', 'Works', 'Education', 'Contact'];

export const Header: React.FC = () => {
  return (
    <>
    <S.Header>
      <Container>
        <Menu menuItems={items} />
      </Container>
    </S.Header>
    
      <MobileMenu menuItems={items} />
    </>
  );
};

