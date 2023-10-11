import React from "react";
import { render } from "react-dom";

import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import "carbon-react/lib/style/fonts.css";

import App from "./App";

render(
  <React.StrictMode>
    <GlobalStyle />
    <CarbonProvider validationRedesignOptIn theme={sageTheme}>
      <App />
    </CarbonProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
