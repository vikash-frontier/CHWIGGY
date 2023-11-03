// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from JS!";

// const root = document.getElementById("root");
// root.appendChild(heading);

const heading = React.createElement("h1", {}, "Hello world from React");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "head" }, "Hello h1 tag"),
    React.createElement("h2", { id: "head2" }, "This is h2")
  )
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
