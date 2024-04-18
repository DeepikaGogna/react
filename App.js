import React from "react";
import ReactDOM from "react-dom/client";
/* const heading = React.createElement(
"h1",
{ id: "heading" }, 
"Hello React World!"
); //3 Parameters we need to pass 1st Tag 2nd Attributes 3rd Children
*/

/* <div id="parent"><div id="child"><h1>I am H1</h1><h2>I am H2</h2></div></div>
const parent = React.createElement("div",{
    id: "parent"
},
React.createElement("div", {
    id:"child"
},[
    React.createElement("h1",{},"I am H1"),
    React.createElement("h2",{},"I am H2"),
])
); */

/* <div id="parent">
<div id="child"><h1>I am H1</h1><h2>I am H2</h2></div><
div id="child2"><h1>I am H1</h1><h2>I am H2</h2></div>
</div> */

//Multiple child we are passing an array
const parent = React.createElement("div",{ //React is an Object
    id: "parent"
},
[React.createElement("div", {
    id:"child"
},[
    React.createElement("h1",{},"I am H1"),
    React.createElement("h2",{},"I am H2"),
]),
React.createElement("div", {
    id:"child2"
},[
    React.createElement("h1",{},"I am H1"),
    React.createElement("h2",{},"I am H2"),
]),
]); 

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);