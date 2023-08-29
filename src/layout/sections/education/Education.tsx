import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import png from "../../../assets/images/bsuir.png";
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const Education = () => {
    return (
        <StyledEducation>
            <Container>
            <SectionTitle>Education</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Png src={png} alt="My University" />
                <Slider/>
            </FlexWrapper>
            </Container>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`

`
const Png = styled.img`
height: 200px;
weight: 150px;
`