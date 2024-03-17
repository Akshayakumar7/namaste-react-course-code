import React from "react";
import ReactDOM from 'react-dom/client'
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "Hello World from React."
);

{
  /* <div id="parent">
    <div id="chilg">
        <h1>This is h1 tag</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent", className: "parent" },
  [
    React.createElement("div", { id: "child1", className: "child" }, [
      React.createElement(
        "h1",
        { id: "heading", className: "heading", key: "one" },
        "This is h1 tag"
      ),
      React.createElement(
        "h2",
        { id: "subheading", className: "subheading", key: "two" },
        "This is h2 tag"
      ),
    ]),
    React.createElement("div", { id: "child2", className: "child" }, [
      React.createElement(
        "h1",
        { id: "heading", className: "heading", key: "one" },
        "This is h1 tag"
      ),
      React.createElement(
        "h2",
        { id: "subheading", className: "subheading", key: "two" },
        "This is h2 tag"
      ),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
