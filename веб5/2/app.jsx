import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              Вставляем внуть <div> тега
const output = <div></div>;

ReactDOM.render(output, document.querySelector("#myDiv"));