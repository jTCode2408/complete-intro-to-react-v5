const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
