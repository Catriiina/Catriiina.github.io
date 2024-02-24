import { S } from "./Works_Styles";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work: React.FC<WorkPropsType & { link: string }> = (props) => {
    return (
        <S.Work id={'works'}>
            <S.Image src={props.src} alt="" />
            <S.Title>{props.title} </S.Title>
            <S.Text>{props.text} </S.Text>
            <S.Link href={props.link} target="_blank" rel="noopener noreferrer"> More.. </S.Link>
        </S.Work>
    );
};

