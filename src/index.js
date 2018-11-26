import React from "react";

import ReactDOM from "react-dom";

import App from "./components/App/App.js";

var div = document.createElement("div")
div.setAttribute("id", "myDiv")
document.body.appendChild(div)

// const SSR = <div onClick={() => alert("hello")}>Hello world</div>;
//
// // Render only in the browser, export otherwise
// if (typeof document === "undefined") {
//   module.exports = SSR;
// } else {
//   ReactDOM.hydrate(SSR, div);
// }

ReactDOM.render(<App />,div);
