import { S } from './Works_Styles';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './Work.tsx';
import socialImg from '../../../assets/images/yandexIntern.webp';
import portfolioImg from '../../../assets/images/portfolio.webp';
import { Container } from '../../../components/Container';
import React, { useState } from "react";

const worksItems: Array<{ status: 'All' | 'My projects' | 'Experience', title: string }> = [
  {
    title: 'All',
    status: 'All'
  },
  {
    title: 'Experience',
    status: 'Experience'
  },
  {
    title: 'My projects',
    status: 'My projects'
  }
];

const workData = [
  {
    title: 'internship at Yandex',
    text: 'Theory and practical experience in web development',
    src: socialImg,
    type: 'Experience'
  },
  {
    title: 'Portfolio',
    text: 'TypeScript, ReactJs, css etc',
    src: portfolioImg,
    type: 'My projects'
  }
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState<'All' | 'My projects' | 'Experience'>('All');
  let filteredWorks = workData;

  if (currentFilterStatus === 'Experience') {
    filteredWorks = workData.filter(work => work.type === 'Experience');
  }

  if (currentFilterStatus === 'My projects') {
    filteredWorks = workData.filter(work => work.type === 'My projects');
  }

  function changeFilterStatus(value: 'All' | 'My projects' | 'Experience') {
    setCurrentFilterStatus(value);
  }

  return (
      <S.Works>
        <Container>
          <SectionTitle> My Works</SectionTitle>
          <Menu menuItems={worksItems} changeFilterStatus={changeFilterStatus} />
          <FlexWrapper wrap={'wrap'} justify={'space-between'}>
            {filteredWorks.map((w, index) => (
                <Work
                    title={w.title}
                    key={index}
                    text={w.text}
                    src={w.src}
                />
            ))}
          </FlexWrapper>
        </Container>
      </S.Works>
  );
};
