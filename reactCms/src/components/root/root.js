import React from "react";
import styled, { ThemeProvider } from "styled-components";
import TopNav from "#root/components/navigation/TopNav";
import { theme } from "#root/styles/GlobalStyles";
import Sidebar from "#root/components/navigation/Sidebar";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const MainBody = styled.div``;

const Content = styled.div`
  position: relative;
  top: 5rem;
  margin-left: 16.5rem;
  padding: 0.5rem 0;
  min-height: calc(100vh - 6rem);
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <TopNav />
        <MainBody>
          <Sidebar />
          <Content>content</Content>
        </MainBody>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
