import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<h1>Hello! React</h1>);
  }
}

React.render(
  <Hello />,
  document.getElementById("container")
);
