
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';

const skillData = [
  {
    iconId: 'html',
    title: 'HTML5'
  },

  {
    iconId: 'css',
    title: 'CSS3'
  },

  {
    iconId: 'reactSvg',
    title: 'REACT'
  },

  {
    iconId: 'typescriptSvg',
    title: 'TYPESCRIPT'
  },

  {
    iconId: 'figma',
    title: 'FIGMA'
  },

  {
    iconId: 'styledComponents',
    title: 'STYLED-COMPONENTS'
  },
]

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle> My Skills </SectionTitle>

        <FlexWrapper justify="space-evenly">
          {skillData.map((s, index) => {
            return  <Skill iconId={s.iconId} key ={index} title={s.title} /> 
          })}
        </FlexWrapper>

        <FlexWrapper justify="space-evenly">
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
