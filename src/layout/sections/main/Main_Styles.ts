import { theme } from '../../../styles/Theme';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';


const Main = styled.div`
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  border: 5px solid transparent;
  border-image: linear-gradient(to left top,
  #08ecf4 10%,
  transparent 30%,
  transparent 70%,
  #08ecf4 90%);
  border-image-slice: 1;
  margin-top: 60px;
  display: flex;
  position: relative;

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
  width: 400px;
  height: 600px;
  margin-left: 80px;
  position: relative;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 450px;
  }

`;

const MainTitle = styled.h1`
  color: ${theme.colors.textColor};
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Name = styled.h2`
  background-clip: text;
  -webkit-background-clip: text; /* Для поддержки браузеров, использующих WebKit (например, Safari и Chrome) */
  color: transparent;
  font-family: Poppins, sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 70px;
  background-image: linear-gradient(to right, #05f7ff, #ffffff); 

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

const Information = styled.p` 
  color: ${theme.colors.textColor};
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

const FlexWrapperMobile = styled(FlexWrapper)`
  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center; 
    text-align: center;
  }
`;

export const S = {
    Main,
    Photo,
    MainTitle,
    Name,
    Information,
    FlexWrapperMobile
}