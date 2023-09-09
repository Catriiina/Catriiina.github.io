import { S } from './Works_Styles';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from '../works/Work';
import socialImg from '../../../assets/images/yandexIntern.jpeg';
import timerImg from '../../../assets/images/portfolio.png';
import { Container } from '../../../components/Container';

const worksItems = ['ALL', 'Experience', 'My projects'];
const workData = [
  {
    title: 'internship at Yandex',
    text: 'Theory and practical experience in web development',
    src: socialImg
  },

  {
    title: 'Portfolio',
    text: 'TypeScript, ReactJs, css etc',
    src: timerImg
  }
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle> My Works</SectionTitle>
        <Menu menuItems={worksItems} />
        <FlexWrapper wrap={'wrap'} justify={'space-between'}>
          {workData.map((w, index) => {
            return <Work
            title={w.title} 
            key={index}
            text={w.text}
            src={w.src}
          />
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};

