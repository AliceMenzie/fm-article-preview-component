import { Container, LinkContainer } from "./ShareToggle.styles";
import facebookLogo from "../../assets/images/icon-facebook.svg";
import twitterLogo from "../../assets/images/icon-twitter.svg";
import pinterestLogo from "../../assets/images/icon-pinterest.svg";
export default function ShareToggle() {
  return (
    <Container>
      <p>Share</p>
      {/* <AvatarInfo> */}
      <LinkContainer>
        <img src={facebookLogo} alt="facebook" />
      </LinkContainer>
      <LinkContainer>
        <img src={twitterLogo} alt="twitter" />
      </LinkContainer>
      <LinkContainer>
        <img src={pinterestLogo} alt="pinterest" />
      </LinkContainer>
      {/* </AvatarInfo> */}
    </Container>
  );
}
