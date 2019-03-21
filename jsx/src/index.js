// Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click on me!";
// }
// Creat a react component
const App = () => {
  const buttonText = { text: "Click Me" };
  const labelText = "Enter name: ";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the rect component and show it on the screan
ReactDOM.render(<App />, document.querySelector("#root"));
