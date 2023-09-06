import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle> My Skills </SectionTitle>

        <FlexWrapper wrap={'wrap'} justify="space-between">
          <Skill iconId={'html'} title={'HTML5'} />

          <Skill iconId={'css'} title={'CSS3'} />

          <Skill iconId={'reactSvg'} title={'REACT'} />
        </FlexWrapper>

        <FlexWrapper wrap={'wrap'} justify="space-between">
          <Skill iconId={'typescriptSvg'} title={'TYPESCRIPT'} />

          <Skill iconId={'figma'} title={'FIGMA'} />

          <Skill iconId={'styledComponents'} title={'STYLED-COMPONENTS'} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
 
`;
