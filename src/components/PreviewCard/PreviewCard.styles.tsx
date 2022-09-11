import styled from "styled-components";

interface AvatarContainerProps {
  active: boolean;
}

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 327px;
  height: 512px;
  background: #ffffff;
  box-shadow: 0px 40px 40px -10px rgba(201, 213, 225, 0.503415);
  border-radius: 10px;
  font-family: inherit;
  @media (min-width: 780px) {
    display: flex;
    flex-direction: row;
    width: 730px;
    height: 280px;
  }
`;

export const Logo = styled.img`
  @media (min-width: 780px) {
    height: 12px;
    display: block;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  font-family: inherit;
  @media (min-width: 780px) {
    justify-content: normal;
    row-gap: 20px;
  }
`;

export const Title = styled.h1`
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px; /* or 150% */
  letter-spacing: 0.2px;
  color: #48556a;
  padding: 38px 32px 0px 32px;
  /* TODO: remove when reset */
  margin: 0;
  @media (min-width: 780px) {
    font-size: 20px;
  }
`;

export const CardFooter = styled.div<AvatarContainerProps>`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.active ? "#48556A" : "#FFFFFF")};
  padding: 8px 0px;
  border-radius: 0px 0px 10px 10px;
  @media (min-width: 780px) {
    background-color: #ffffff;
    white-space: nowrap;
    justify-content: ${(props) => (props.active ? "unset" : "space-between")};
  }
`;

export const Summary = styled.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px; /* or 154% */
  letter-spacing: 0.121875px;
  color: #6e8098;
  /* TODO: remove when reset */
  margin: 0;
  padding: 0 32px;
`;

export const LogoContainer = styled.div<AvatarContainerProps>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ecf2f8;
  margin-right: 32px;
  @media (min-width: 780px) {
    margin-right: ${(props) => (props.active ? "0px" : "32px")};
    margin-left: ${(props) => (props.active ? "14.5px" : "0px")};
  }
`;

export const AvatarContainer = styled.div<AvatarContainerProps>`
  display: flex;
  flex-direction: row;
  padding-left: 32px;
`;

export const Avatar = styled.img<AvatarContainerProps>`
  display: ${(props) => (props.active ? "none" : "inline-block")};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
  @media (min-width: 780px) {
    display: inline-block;
  }
`;
export const AvatarInfo = styled.div<AvatarContainerProps>`
  display: ${(props) => (props.active ? "none" : "flex")};
  flex-direction: column;
  padding-left: 16px;
  @media (min-width: 780px) {
    display: flex;
  }
`;

export const ContentP = styled.p`
  font-family: inherit;
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.12187500298023224px;
  text-align: left;
  color: #48556a;
`;

export const ContentS = styled.span`
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.12187500298023224px;
  text-align: left;
  color: #9daec2;
`;

export const ShareComponent = styled.section<AvatarContainerProps>`
  background-color: #48556a;
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
  margin: 0;

  p {
    margin: 0;
    text-transform: uppercase;
    color: #9daec2;
    font-size: 13px;
    letter-spacing: 5px;
  }
  @media (min-width: 780px) {
    display: ${(props) => (props.active ? "flex" : "none")};
    justify-content: unset;
    position: relative;
    top: -50px;
    left: 33.4%;
    border-radius: 5px;
    padding: 5px 18px;
    p {
      font-size: 10px;
    }

    :after {
      border-right: solid 7.5px transparent;
      border-left: solid 7.5px transparent;
      border-top: solid 7.5px #48556a;
      transform: translateX(-50%);
      position: absolute;
      content: "";
      top: 100%;
      left: 50%;
      height: 0;
      width: 0;
    }
  }
`;

export const ActiveContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #48556a;
  @media (min-width: 780px) {
    width: 16px;
    height: 16px;
  }
`;
