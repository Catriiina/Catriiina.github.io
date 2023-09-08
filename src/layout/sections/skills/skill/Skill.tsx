import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';

type SkillPropsType = {
  iconId: string;
  title: string;
};
export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} align={'center'}>
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px;
`;
const SkillTitle = styled.h3`
  text-align: center;
  font-weight: 150;
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