import styled from 'styled-components';
import { theme } from "../../styles/Theme.ts";

type MenuPropsType = {
    menuItems: Array<{ status: 'All' | 'My projects' | 'Experience', title: string }>;
    changeFilterStatus: (value: 'All' | 'My projects' | 'Experience') => void;
};

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        <Link as='button' onClick={() => { props.changeFilterStatus(item.status) }}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const Link = styled.button`
  font-weight: 500;
  color: ${theme.colors.textColor};
  text-decoration: none;
  transition: color 0.3s;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.accentColor};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
  }

  &:hover {
    color: ${theme.colors.accentColor};

    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 90px;
    text-align: center;
  }

  li {
    position: relative;
  }
`;