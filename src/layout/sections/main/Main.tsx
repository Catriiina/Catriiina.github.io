import photo from '../../../assets/images/MyPhoto.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
  return (
           <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
        <FlexWrapperMobile>
          <div>
            <Name>I'm Katrina Guz</Name>
            <MainTitle>Frontend Developer</MainTitle>
            <Information>
              <FlexWrapper align={'left'} justify={'space-around'} wrap={'wrap'}>
                Hello, I'm a Front-End Developer. I'm from Belarus, but now i'm
                living in Belgrade, Serbia.
              </FlexWrapper>
            </Information>
          </div>
          <Photo src={photo} alt="My Photo" />
          </FlexWrapperMobile>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  border: 5px solid transparent;
  border-image: linear-gradient(
    to left top,
    #adf2f7 10%,
    transparent 30%,
    transparent 70%,
    #adf2f7 90%
  );
  border-image-slice: 1;
  margin-top: 60px;
  display: flex;

  @media ${theme.media.mobile} {
    width: 100%; 
    height: auto; 
    justify-content: center; 
  }

  @media ${theme.media.tablet} {
    width: 100%; 
    height: auto; 
  }

`;

const Photo = styled.img`
  width: 350px;
  height: 500px;
  object-fit: scale-down;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 450px;
  }

`;

const MainTitle = styled.h1`
  ${font({weight: 400, color: '#242424', Fmax: 30, Fmin: 20 })};
`;

const Name = styled.h2`
  ${font({family: 'Poppins', weight: 500, lineHeight: 70, Fmax: 50, Fmin: 36 })};
  font-style: normal;
  color: ${theme.colors.accent};
`;

const Information = styled.p` 
  ${font({weight: 400, color: '#242424',lineHeight: 30, Fmax: 18, Fmin: 13 })};
 
`;

const FlexWrapperMobile = styled(FlexWrapper)`
  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center; 
    text-align: center;
  }
`;