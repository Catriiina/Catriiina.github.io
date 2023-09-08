import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import png from '../../../assets/images/pngwing.com.png';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import ground from '../../../assets/images/foni.jpeg';

export const Education = () => {
  return (
    <StyledEducation>
      <Container>
        <SectionTitle>Education</SectionTitle>
        <FlexWrapper direction={'column'} align={'center'}>
          <Png src={png} alt="My University" />
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledEducation>
  );
};

const StyledEducation = styled.section`
  background-image: url(${ground});
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  padding: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Png = styled.img`
  height: 100%;
  width: 100px;
`;
