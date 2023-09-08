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
font-size: calc((100vw - 360px) / (1440px - 360px) * (${Fmax}px - ${Fmin}px) + ${Fmin}px);
`