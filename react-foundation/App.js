import React from "react";
import ReactDOM from "react-dom/client";

// ============================================================================
// 1. Hello World Using React (React.createElement)
// ============================================================================
// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ============================================================================
// 2. Nested Elements using React.createElement
// ============================================================================
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "children" },
//     React.createElement("h1", null, "This is Namaste React 🚀"),
//     React.createElement("h2", null, "I'm a h2"),
//     React.createElement("h3", null, "I'm a h3"),
//   ),
//   React.createElement(
//     "div",
//     { id: "children2" },
//     React.createElement("h1", null, "I'm a h1"),
//     React.createElement("h2", null, "I'm a h2"),
//     React.createElement("h3", null, "I'm a h3"),
//   ),
//   React.createElement(
//     "div",
//     { id: "children3" },
//     React.createElement("h1", null, "I'm a h1"),
//     React.createElement("h2", null, "I'm a h2"),
//     React.createElement("h3", null, "I'm a h3"),
//   ),
// );

// ============================================================================
// 3. Normal React Element using JSX
// ============================================================================
// const App = (
//   <div id="parent">
//     <div id="children">
//       <h1>I'm a h1</h1>
//       <h2>I'm a h2</h2>
//     </div>
//   </div>
// );

// ============================================================================
// 4. React Functional Component using Normal Function
// ============================================================================
// function App() {
//   return (
//     <div id="parent">
//       <div id="children">
//         <h1>I'm a h1</h1>
//         <h2>I'm a h2</h2>
//       </div>
//     </div>
//   );
// }

// ============================================================================
// 5. React Functional Component using Arrow Function (Without Return Keyword)
// ============================================================================
// const App = () => (
//   <div id="parent">
//     <div id="children">
//       <h1>I'm a h1</h1>
//       <h2>I'm a h2</h2>
//     </div>
//   </div>
// );

// ============================================================================
// 6. React Functional Component using Arrow Function (With Return Keyword)
// ============================================================================
export const Title = () => {
  return <div>I'm a title</div>;
};

// Component Composition: Using <Title /> inside App
const App = () => {
  return (
    <div id="parent">
      <Title />
      <div id="children">
        <h1>I'm a h1</h1>
        <h2>I'm a h2</h2>
      </div>
    </div>
  );
};

// Rendering the App to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
