import styled from 'styled-components';

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <li key={index}>
              <a href="">{item}</a>
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
    gap: 30px;
    text-aligh: center;
  }

  li {
    position: relative;
  }

  a {
    font-weight: 500;
    color: #000;
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
    background-color: #64efff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
  }

  a:hover {
    color: #64efff;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
