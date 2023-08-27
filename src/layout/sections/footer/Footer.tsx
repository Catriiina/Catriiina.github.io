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
width: 250px;
height: 90px;
margin: 0 auto;
border: 2px solid transparent;
border-image: linear-gradient(to left top,#adf2f7 10%,  transparent 30%, transparent 70%, #adf2f7 90%);
border-image-slice: 1;
`
const SocialList = styled.ul`
display: flex;
gap: 40px;
justify-content: center;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`
const Text = styled.span`

`