import photo from '../../../assets/images/MyPhoto.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import styled from "styled-components";

export const Main: React.FC = () => {
  return (
           <S.Main id={'home'}>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
          <S.Wrapper>
          <S.FlexWrapperMobile>
          <div>
            <S.Name>I'm Katrina Guz</S.Name>
            <S.MainTitle>Frontend Developer</S.MainTitle>
            <S.Information>
              <FlexWrapper align={'left'} justify={'space-around'} wrap={'wrap'}>
                Hello, i'm a graduate of the Faculty of Information Technologies at BSUIR. Currently, I reside in Belgrade, Serbia, where I continue to develop my skills in the field of IT.
                Thanks to my education at BSUIR and living in different cultural environments, I have evolved both professionally and personally.
                My journey is closely tied to frontend development, and I envision myself as a young and energetic professional, eager for continuous professional growth. I'm passionate about the opportunity to create interfaces that are not only functional but also pleasing for the user.
              </FlexWrapper>
            </S.Information>
          </div>
          <S.Photo src={photo} alt="My Photo" />
          </S.FlexWrapperMobile>
          </S.Wrapper>
        </FlexWrapper>

      </Container>
    </S.Main>
  );
};

