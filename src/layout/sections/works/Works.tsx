import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import {Menu} from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Work} from '../works/Work';
import socialImg from '../../../assets/images/socialImg.png';
import timerImg from '../../../assets/images/timerImg.png';

const worksItems = ["ALL", "React"];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle> My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} text={"something about"} src={socialImg}/>
                <Work title={"Timer"} text={"something about"} src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`  
min-height: 100vh;
`