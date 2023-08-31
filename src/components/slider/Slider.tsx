import styled from 'styled-components';


export const Slider = () => {
    return (
        <StyledSlider>
             <Slide>
                <Text> Qualification - Information Technology Engineer</Text>
               
                <Name> Belarusian State University of Informatics and Radioelectronics </Name>
                <Years> 2020-2024</Years>
              </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`

`
const Name = styled.span`
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 30px; 

`
const Text = styled.p`

`
const Slide = styled.div`
display: flex; 
    flex-direction: column;
    align-items: center; 

    & > * {
        width: 100%;
        max-width: 100%;
        padding: 10px;
        margin: 10px auto;
        background-color: rgba(0, 0, 0, 0.5);
    }
`
const Years = styled.p`

`