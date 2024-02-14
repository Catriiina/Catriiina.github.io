import { theme } from '../../styles/Theme';
import styled from 'styled-components';

const Header = styled.header`
  margin: 0 auto;
  padding: 0;
  position: fixed;
  top: 0;
  background-color: ${theme.colors.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  width: 100%;
 

  
  @media ${theme.media.tablet} {
    display: none;
  }
`;

export const S = {
    Header
}
