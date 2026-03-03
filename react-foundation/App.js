//--------------------------------Hello World Using React--------------------------->
// const heading=React.createElement("h1",{id:"heading"},"Hello World from React");
// console.log(heading)
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

//<--------------Nested Element using React------------------------------------------>
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", null, "I'm a h1"),
    React.createElement("h2", null, "I'm a h2"),
    React.createElement("h3", null, "I'm a h3"),
  ),
  React.createElement(
    "div",
    { id: "children2" },
    React.createElement("h1", null, "I'm a h1"),
    React.createElement("h2", null, "I'm a h2"),
    React.createElement("h3", null, "I'm a h3"),
  ),
  React.createElement(
    "div",
    { id: "children3" },
    React.createElement("h1", null, "I'm a h1"),
    React.createElement("h2", null, "I'm a h2"),
    React.createElement("h3", null, "I'm a h3"),
  ),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
