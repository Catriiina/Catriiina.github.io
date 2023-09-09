import photo from '../../../assets/images/MyPhoto.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
  return (
           <S.Main>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
        <S.FlexWrapperMobile>
          <div>
            <S.Name>I'm Katrina Guz</S.Name>
            <S.MainTitle>Frontend Developer</S.MainTitle>
            <S.Information>
              <FlexWrapper align={'left'} justify={'space-around'} wrap={'wrap'}>
                Hello, I'm a Front-End Developer. I'm from Belarus, but now i'm
                living in Belgrade, Serbia.
              </FlexWrapper>
            </S.Information>
          </div>
          <S.Photo src={photo} alt="My Photo" />
          </S.FlexWrapperMobile>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};

