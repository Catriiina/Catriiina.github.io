import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';

export const Slider = () => {
    return (
        <StyledSlider>
             <Slide>
                <Text> Qualification - Information Technology Engineer</Text>
                <FlexWrapper>
                <Text> Subjects covered:
                        1. Fundamentals of mathematics, physics, graphics, electronics, and programming.
                        2. Methods for creating software and data analysis.
                        3. Operating systems: Windows, UNIX, LINUX, QNX.
                        4. Programming languages: Assembler, C++, Visual Basic, Delphi, SQL.
                        5. Modeling and design tools: GPSS, AutoCAD, MathCAD, MATLAB.
                        6. Corporate system development: SAP R3, Lotus Notes.
                        etc</Text>
                 </FlexWrapper>
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

`
const Years = styled.p`

`