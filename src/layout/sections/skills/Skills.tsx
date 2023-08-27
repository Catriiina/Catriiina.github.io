import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Skill} from './skill/Skill'

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle> My Skills </SectionTitle>
            <FlexWrapper wrap={"wrap"} justify="space-between">
                <Skill iconId={"html"}
                 title={"HTML5"} 
                 description={"pro HTML5"}/>

                <Skill iconId={"css"} 
                 title={"CSS3"}
                 description={" pro CSS3"}/>

                <Skill iconId={"reactSvg"} 
                 title={"REACT"} 
                 description={" pro REACT"}/>
            </FlexWrapper>

            <FlexWrapper wrap={"wrap"} justify="space-between">
                <Skill iconId={"typescriptSvg"} 
                 title={"TYPESCRIPT"} 
                 description={" pro TYPESCRIPT"}/>

                <Skill iconId={"figma"}
                 title={"FIGMA"} 
                 description={"pro FIGMA"}/>

                <Skill iconId={"styledComponents"}
                 title={"STYLED-COMPONENTS"} 
                 description={"pro STYLED-COMPONENTS"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
min-height: 100vh;
`