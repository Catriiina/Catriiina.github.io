import styled from 'styled-components';
import ground from '../../../assets/images/notebook.jpg';

const Contacts = styled.section`
  min-height: 50vh;
  background-image: url(${ground});
  background-size: cover;
  background-position: center;
  opacity: 0.85;
  padding: 50px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1170px;
`;

const Form = styled.form`
max-width: 300px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
margin: 0 auto;
`;

const Field = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
`;

const Text = styled.p`
  width: 100%;
  max-width: 100%;
  margin: 10 auto;
  color: #64efff;
  max-width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const S = {
    Contacts,
    Form,
    Field,
    Text
}