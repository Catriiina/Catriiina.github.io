import { S } from "./Works_Styles";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.Image src={props.src} alt="" />
      <S.Title>{props.title} </S.Title>
      <S.Text>{props.text} </S.Text>
      <S.Link href={'#'}> Demo </S.Link>
    </S.Work>
  );
};
