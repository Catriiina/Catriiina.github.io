import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import styled from 'styled-components';
import { theme } from "../../../src/styles/Theme";

const items = ["Home", "Skills", "Works", "Education", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>   
    );
};

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
background-color: ${theme.colors.secondaryBg};
position: relative;
margin: 0 auto;
padding: 0 ;
`


