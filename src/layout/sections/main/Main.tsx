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
                live in blablabla lfs;djkdlkdldlkfl
                dewjfefhnschihfehfhenlnsljchhihfihs
                neklndljaszlochhuh cousbdjbncjbeudh
                uwahdnsjhxahuhxuugjbknkawiiwiwiwjsj
                    
                </Information>
            </div>
            <StyledMyPhoto src={MyPhotoImage} alt="My Photo" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
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
