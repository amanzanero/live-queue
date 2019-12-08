import * as React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import "./app.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00838f",
      light: "#4fb3bf",
      dark: "#005662"
    },
    secondary: {
      main: "#303f9f",
      light: "#666ad1",
      dark: "#001970"
    }
  },
  spacing: factor => `${0.25 * factor}rem` // (Bootstrap strategy)
});

const App: React.FC = () => {
  return <Navbar />;
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
