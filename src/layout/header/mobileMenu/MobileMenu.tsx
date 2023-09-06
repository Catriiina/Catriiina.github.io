import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={true}>
        <span>вапарол</span>
      </BurgerButton>
      <MobileMenuPopup isOpen={true}>
        <ul>
          {props.menuItems.map((item: string, index: number) => {
            return (
              <li key={index}>
                <a href="">{item}</a>
              </li>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  ul {
    display: flex;
    gap: 30px;
    text-align: center;
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
    background-color: ${theme.colors.accent};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
  }

  a:hover {
    color: ${theme.colors.accent};
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 100px;
  right: 100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 0px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &:: before {
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate (-45deg) translateY(0);
        `}
    }

    &:: after {
      display: block;
      width: 35px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate (45deg) translateY(0);
        `}
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba (31, 31, 32, 0.9);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
