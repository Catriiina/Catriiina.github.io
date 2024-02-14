import styled from 'styled-components';
import ground from '../../../assets/images/notebook.webp';
import { theme } from '../../../styles/Theme';

const Contacts = styled.section`
  max-height: 50vh;
  background-image: url(${ground});
  background-size: cover;
  background-position: center;
  padding: 50px;
  color: ${theme.colors.bgColor};

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