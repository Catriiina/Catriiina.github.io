import styled from 'styled-components'
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <Text>You can find me here:</Text>
           <FlexWrapper direction={"column"} align={"center"}>
            <SocialList>

                <SocialItem>
                  <SocialLink>
                    <Icon iconId={"gmail"} height={"35px"} width={"35px"} viewBox={"0 0 35px 35px"}/>
                  </SocialLink>
                </SocialItem>

                <SocialItem>
                  <SocialLink>
                    <Icon iconId={"linkedin"} height={"35px"} width={"35px"} viewBox={"0 0 35px 35px"}/>
                  </SocialLink>
                </SocialItem>

                <SocialItem>
                  <SocialLink>
                    <Icon iconId={"github"} height={"35px"} width={"35px"} viewBox={"0 0 35px 35px"}/>
                  </SocialLink>
                </SocialItem>

            </SocialList>

            <Copyright>Made by Katarin G — Copyright 2023</Copyright>
          </FlexWrapper> 
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: #ffd8a5;
min-height: 20px;

`
const SocialList = styled.ul`
display: flex;
gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`
const Text = styled.span`

`