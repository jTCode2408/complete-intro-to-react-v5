import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, { name: "Drogo", animal: "dog", breed: "Aussie" }),
  //     React.createElement(Pet, {
  //       name: "Giselle",
  //       animal: "dog",
  //       breed: "question"
  //     }),
  //     React.createElement(Pet, { name: "Dutch", animal: "dog", breed: "Pit" })
  //   ]);
  return (
    <div>
      <h1> Adopt Me!</h1>
      <Pet name="Drogo" animal="Dog" breed= "Aussie" />
      <Pet name="Giselle" animal="Dog" breed= "Unknown" />
      <Pet name="Dutch" animal="Dog" breed= "Pit" />
    </div>
  );
};

render(<App/> , document.getElementById("root"));
