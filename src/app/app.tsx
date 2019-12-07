import * as React from "react";
import ReactDOM from "react-dom";
import { styled } from "@material-ui/core/styles";

const App: React.FC = () => {
  return <div>Hello world!</div>;
};

const AppWrapper = styled(App)({
  body: {
    margin: 0,
    fontFamily: "Roboto Slab"
  }
});

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
