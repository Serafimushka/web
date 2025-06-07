import React from "react";
import ReactDOM from "react-dom";
let age = "12";
let name = "James";
let output = <span>{name} is {age} years old</span>;
ReactDOM.render(output, document.querySelector("#myDiv"));