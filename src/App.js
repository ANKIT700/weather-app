import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather/Weather";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Weather />
      </>
    );
  }
}

export default hot(App);
