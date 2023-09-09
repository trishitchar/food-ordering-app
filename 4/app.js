//babel plugin transform remove console = Remove console.log =
//      npm install babel-plugin-transform-remove-console --save-dev = inside code node + packege
//      .babelrc = configuration file for babel 

// add key to uniquely identify to sibling child and helps to separate them
// jsx => react.createelement => object => html( DOM ) 
// jsx -> we want to write lot html using js 

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM directly, not 'react-dom/client'

const tc = React.createElement("h1", {
    id: "tchar",
    key: "h1",
}, "kya baat h");

//React element
const heading = (
    <h1 id="title" key="h2">Kya baat h 2</h1>
);

// Functional component
const Heading1 = () => (
    <h1 id="title" key="h2">Kya baat h 3</h1>
);
//React component
// 1. functional component, 2. class based componenet (old)
const HeaderComponent = () => {
    return (
        <div>
            <h2>in functional componenet</h2>
            <h3>yey</h3>
        </div>
    );
};

//react element inside my component
//heading will replaced react element  

//component composition
const HeaderComponent1 = () => {
    return (
        <div>
            {heading}  
            {console.log("any js code")}  
            <Heading1/>
            {Heading1()}
            <h2>in functional componenet</h2>
            <h3>yey</h3>
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< HeaderComponent1 />); // Pass the React element to the render method, not a string
