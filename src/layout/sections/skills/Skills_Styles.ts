import styled from 'styled-components';
import {theme} from "../../../styles/Theme.ts";

const Skills = styled.section`
 
`;
const Skill = styled.div`
  width: 380px;
  padding: 62px 20px;
`;
const SkillTitle = styled.h3`
  text-align: center;
  font-weight: 150;
  color: ${theme.colors.textColor};
`;
const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;

export const S = {
    Skills,
    Skill,
    SkillTitle,
    IconWrapper
}

