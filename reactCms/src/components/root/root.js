import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import TopNav from "#root/components/navigation/TopNav";
import { theme } from "#root/styles/GlobalStyles";
import Sidebar from "#root/components/navigation/Sidebar";
import Routes from "#root/routes/routes";

const MainBody = styled.div``;

const Content = styled.div`
  position: relative;
  top: 5rem;
  padding: 0.5rem;
  margin-left: 16.5rem;
  min-height: calc(100vh - 6rem);
  transition: margin 300ms ease-in-out;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopNav />

        <MainBody>
          <Sidebar />
          <Content>
            <Switch>
              {Routes.map((route, index) => (
                <Route
                  key={index}
                  exact
                  path={route.pathname}
                  component={route.component}
                />
              ))}
            </Switch>
          </Content>
        </MainBody>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
