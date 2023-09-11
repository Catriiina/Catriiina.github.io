import { theme } from '../../../styles/Theme';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';


const Main = styled.div`
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  border: 5px solid transparent;
  border-image: linear-gradient(
    to left top,
    #08ecf4 10%,
    transparent 30%,
    transparent 70%,
    #08ecf4 90%
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
  color: #242424;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Name = styled.h2`
  color: ${theme.colors.accent}; 
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 70px;
  @media (max-width:1024px) {
   font-size:40px
  }
`;

const Information = styled.p` 
  color: #242424;
  font-size: 18px;
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