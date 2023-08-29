import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import ground from '../../../assets/images/notebook.jpg';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle >Contact me</SectionTitle>
            <Text>Let me know if you want to talk about a potential collaboration. I'm available for freelance work.</Text>
            <StyledForm>
                <Field placeholder={"What's your name?"} />
                <Field placeholder={"Your email"}/>
                <Field placeholder={"Tell me about your project"} as={"textarea"} />
                <Button type={"submit"}>Send </Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
min-height: 50vh;
background-image: url(${ground});
background-size: cover;
background-position: center;
opacity: 0.8; /* Прозрачность блока */
padding: 50px; /* Пример отступов для содержимого */
`
const StyledForm  = styled.form`
max-width: 300px;
width: 100%
display: flex;
flex-direction: column;
gap: 10px;
margin: 0 auto;
`
const Field = styled.input` 
padding: 15px;
border: 1px solid #ccc;
border-radius: 10px;
width: 100%; 
`
const Text = styled.p`
width: 100%;
max-width: 100%;
margin: 10 auto;
color: #64efff;
max-width: 100%;
padding: 10px; 
background-color: rgba(0, 0, 0, 0.5); /* Установите желаемый цвет фона (здесь используется полупрозрачный черный цвет) */
`
