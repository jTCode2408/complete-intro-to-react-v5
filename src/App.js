import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Drogo", animal: "dog", breed: "Aussie" }),
    React.createElement(Pet, {
      name: "Giselle",
      animal: "dog",
      breed: "question"
    }),
    React.createElement(Pet, { name: "Dutch", animal: "dog", breed: "Pit" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
