import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Contacts = styled.section`
  height: 100%;
  padding: 15px;
  color: ${theme.colors.bgColor};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Form = styled.form`
max-width: 300px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
margin: 40px auto 0;
align-items: center;
text-align: center;
  
@media ${theme.media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;

const Field = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
`;


export const S = {
    Contacts,
    Form,
    Field
}