
/* 
import { theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
font-family: ${family || 'Roboto'};
font-weight: ${weight || '400'};
color: ${color || theme.colors.textColorS};
line-height: ${lineHeight || 1.2};
font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`





const MainTitle = styled.h1`
  ${font({weight: 400, color: '#242424', Fmax: 30, Fmin: 20 })};
  font-style: normal;
`;

const Name = styled.h2`
  ${font({family: 'Poppins', weight: 500, Fmax: 50, Fmin: 36 })};
  font-style: normal;
  color: ${theme.colors.accent};
`;

const Information = styled.p` 
  ${font({weight: 400, color: '#242424', Fmax: 18, Fmin: 13 })};
  font-style: normal;
`;
*/