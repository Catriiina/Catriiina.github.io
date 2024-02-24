import styled from 'styled-components';
import {theme} from "../../styles/Theme.ts";

export const Menu = (props: { menuItems: Array<{ title: string, href: string }> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item) => {
                    return (
                        <li key={item.title} >
                            <a href={item.href}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 90px;
    text-align: center;
  }

  li {
    position: relative;
  }

  a {
    font-weight: 500;
    color: ${theme.colors.textColor};
    text-decoration: none;
    transition: color 0.3s;
  }

  a.active::after {
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

  a:hover {
    color: ${theme.colors.accentColor};
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
