import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Education = () => {
    return (
        <StyledEducation>
            <SectionTitle>Education</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"education"}/>
                <Slider/>
            </FlexWrapper>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`

`
