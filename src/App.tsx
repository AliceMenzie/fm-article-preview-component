import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PreviewCard from "./components/PreviewCard/PreviewCard";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Manrope', sans-serif;
    box-sizing: border-box;
  }
`;

const StyledApp = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <PreviewCard
        title="Shift the overall look and feel by adding these wonderful touches to
        furniture in your home"
        summary="Ever been in a room and felt like something was missing? Perhaps it
        felt slightly bare and uninviting. I’ve got some simple tips to help
        you make any room feel complete."
        date="28 Jun 2020"
        author="Michelle Appleton"
      />
    </StyledApp>
  );
}

export default App;
