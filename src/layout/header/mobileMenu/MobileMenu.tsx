import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';
import { useState } from 'react';


export const MobileMenu: React.FC<{ menuItems: Array<{ title: string, href: string }> }> = (props: { menuItems: Array<{ title: string, href: string }> }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (href: string) => {
        setIsOpen(false); // Закрываем мобильное меню после клика
        const section = document.getElementById(href);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={isOpen}>
                <ul>
                    {props.menuItems.map((item) => {
                        return (
                            <li key={item.title}>
                                <a href={item.href} onClick={() => handleClick(item.href)}>{item.title}</a>
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
    color: ${theme.colors.bgColor};
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

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
  z-index: 9999999;
 background-color: transparent;
 padding: 0;
 border: none;

  &:focus {
    outline: none;
  }
  

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${(props) => (props.isOpen ? 'transparent' : theme.colors.accentColor)}; 
    position: absolute;
    left: 0px;
    bottom: 20px;

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accentColor}; 
      position: absolute;
      transform: ${(props) => (props.isOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(-10px)')};
      transition: transform 0.3s, background-color 0.3s; 
    }

    &::after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accentColor};
      position: absolute;
      transform: ${(props) => (props.isOpen ? 'rotate(45deg) translateY(0)' : 'translateY(10px)')};
      transition: transform 0.3s, background-color 0.3s; 
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.mobColor};
    `}

  ul {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
