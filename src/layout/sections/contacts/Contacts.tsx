import { S } from './Contacts_Styles';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';


export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.Text>
          Let me know if you want to talk about a potential collaboration. I'm
          available for freelance work.
        </S.Text>
        <S.Form>
          <S.Field placeholder={"What's your name?"} />
          <S.Field placeholder={'Your email'} />
          <S.Field placeholder={'Tell me about your project'} as={'textarea'} />
          <Button type={'submit'}>Send </Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
