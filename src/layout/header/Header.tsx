import { Menu } from "../../components/menu/Menu";
import styled from 'styled-components';
import { Container } from "../../components/Container";

const items = ["Home", "Skills", "Works", "Education", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container> 
                <Menu menuItems={items}/>
            </Container>
        </StyledHeader>   
    );
};

const StyledHeader = styled.header`
margin: 0 auto;
padding: 0 ;
position: fixed; 
top: 0; 
width: 100%;
background-color: #242424;
`


