import { theme } from '../../../styles/Theme';
import styled from 'styled-components';

const Works = styled.section`
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  color: ${theme.colors.textColor};
  margin-bottom: 20px; 

  @media ${theme.media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100%;
    height: 100vh;
    margin-bottom: 60px; 
  }
`;

const Work = styled.div`
  max-width: 540px;
  width: 100%;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    justify-content: center;
    width: 300px;
    height: 200px;
  }
`;

const Title = styled.h3`
`;

const Link = styled.a`
    
`;

const Text = styled.p`
  color: ${theme.colors.textColor};
`;

export const S = {
    Works,
    Work,
    Image,
    Title,
    Link,
    Text
}