import { S } from './Contacts_Styles';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import emailjs from '@emailjs/browser';
import React, {ElementRef, useRef} from 'react';
import { FormEvent } from 'react';

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
        .sendForm('service_33gwxop', 'template_bdp3u9g', form.current, {
          publicKey: 'XwgL5NehP8R9Etf1K',
        })
        .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );

    form.current.reset();
  };

  return (
    <S.Contacts id={'contact'}>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={"What's your name?"} name={'user_name'} />
          <S.Field required placeholder={'Your email'} name={'user_mail'}/>
          <S.Field required placeholder={'Tell me about your project'} as={'textarea'} name={'message'} />
          <Button type={'submit'}>Send </Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
