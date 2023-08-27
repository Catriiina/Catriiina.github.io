import MyPhotoImage from '../../../assets/images/MyPhoto.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
                <Name>I'm Katrina Guz</Name>
                <MainTitle>Frontend Developer</MainTitle>
                <Information> 
                Hello, I'm a motivated and dedicated Computer Science student with a strong passion for learning and staying up-to-date with emerging technologies. Currently pursuing a specialization in Computer Science at the university, I am eager to leverage my theoretical knowledge and practical skills in a professional setting as an Intern/Junior Frontend Engineer. With a solid foundation in programming languages, web development, and user interface design, I am excited to contribute to innovative projects and make a meaningful impact in the field of frontend engineering.
                </Information>
            </div>
            <StyledMyPhoto src={MyPhotoImage} alt="My Photo" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    width: 1280px;
    height: 600px;
    margin: 0 auto;
    border: 5px solid transparent;
    border-image: linear-gradient(to left top,#adf2f7 10%,  transparent 30%, transparent 70%, #adf2f7 90%);
    border-image-slice: 1;
    margin-top: 60px;
`

const StyledMyPhoto = styled.img`
width: 350px;
height: 430px;
object-fit: cover;
`;

const MainTitle = styled.h1`

`

const Name = styled.h2`

`
const Information = styled.text`

`
