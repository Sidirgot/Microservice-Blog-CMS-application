import React, { Fragment } from "react";
import { render } from "react-dom";
import Root from "#root/components/root";
import GlobalStyles from "./styles/GlobalStyles";

render(
  <Fragment>
    <GlobalStyles />
    <Root />
  </Fragment>,
  document.getElementById("root")
);
