import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/drawers.jpg";
import shareLogo from "../../assets/images/icon-share.svg";
import facebookLogo from "../../assets/images/icon-facebook.svg";
import twitterLogo from "../../assets/images/icon-twitter.svg";
import pinterestLogo from "../../assets/images/icon-pinterest.svg";
import avatar from "../../assets/images/avatar-michelle.jpg";

import {
  Container,
  Layout,
  Title,
  Summary,
  CardFooter,
  AvatarContainer,
  Avatar,
  AvatarInfo,
  ContentP,
  ContentS,
  LogoContainer,
  Logo,
  ShareComponent,
  ActiveContainer,
} from "./PreviewCard.styles";

interface PreviewCardProps {
  title: string;
  summary: string;
  author: string;
  date: string;
}

export const Image = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  @media (min-width: 780px) {
    height: 280px;
    width: 40%;
    border-radius: 10px 0px 0px 10px;
  }
`;

const PreviewCard: React.FC<PreviewCardProps> = ({
  title,
  summary,
  author,
  date,
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <Container>
      <Image src={logo} alt="green chest of draws with flowers" />
      <Layout>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <CardFooter active={active}>
          <AvatarContainer active={active}>
            <Avatar src={avatar} active={active} />
            <AvatarInfo active={active}>
              <ContentP>{author}</ContentP>
              <ContentS>{date}</ContentS>
            </AvatarInfo>
            {active && (
              <ShareComponent active={active}>
                <p>Share</p>
                <ActiveContainer>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Logo src={facebookLogo} />
                  </a>
                </ActiveContainer>
                <ActiveContainer>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Logo src={twitterLogo} />
                  </a>
                </ActiveContainer>
                <ActiveContainer>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Logo src={pinterestLogo} />
                  </a>
                </ActiveContainer>
              </ShareComponent>
            )}
          </AvatarContainer>
          <LogoContainer active={active} onClick={() => setActive(!active)}>
            <Logo src={shareLogo} />
          </LogoContainer>
        </CardFooter>
      </Layout>
    </Container>
  );
};

export default PreviewCard;
