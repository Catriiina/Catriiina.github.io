import { Menu } from '../../components/menu/HeaderMenu.tsx';
import { Container } from '../../components/Container';
import { MobileMenu } from './mobileMenu/MobileMenu';
import {S} from './Header_Styles.ts'

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

