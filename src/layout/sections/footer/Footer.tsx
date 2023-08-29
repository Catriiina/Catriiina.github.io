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

            <Copyright> Designed and developed by Katarin G 2023</Copyright>
          </FlexWrapper> 
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

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
const Text = styled.span`

`

const Copyright = styled.small`

`
