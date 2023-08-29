import photo from "../../../assets/images/MyPhoto.jpg";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"}>
            <div>
                <Name>I'm Katrina Guz</Name>
                <MainTitle>Frontend Developer</MainTitle>
                <Information> 
                    <FlexWrapper align={"left"} justify={"space-around"} >
                    Hello, I'm a Front-End Developer. I'm from Belarus, but now i live in Belgrade, Serbia.

                    </FlexWrapper>
                </Information>
            </div>
            <Photo src={photo} alt="My Photo" />
            </FlexWrapper>
            </Container>
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
    display: flex;
`

const Photo = styled.img`
width: 350px;
height: 500px;
object-fit: scale-down;
`

const MainTitle = styled.h1`
color: #111 ;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Name = styled.h2`
color:#white;
font-family: Poppins;
font-size: 60px;
font-style: normal;
font-weight: 500;
line-height: 70px;
`
const Information = styled.text`
color: #white;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px; 
`
