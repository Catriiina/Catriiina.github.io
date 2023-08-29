import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import {Menu} from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Work} from '../works/Work';
import socialImg from '../../../assets/images/socialImg.png';
import timerImg from '../../../assets/images/timerImg.png';
import { Container } from '../../../components/Container';

const worksItems = ["ALL", "React"];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle> My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} text={"something about"} src={socialImg}/>
                <Work title={"Timer"} text={"something about"} src={timerImg}/>
            </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`  
max-height: 70vh;
`