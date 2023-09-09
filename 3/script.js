// what does parcel do -> 
// hot module reload = HMR automatically reload
// File watcher algorithm - c++
// caching things while development
// image optimization
// dist -> cache
// HTTPS functionality on dev : npx parcel index.html --htpps
// Bundling and many more
// port number manegment
// tree shaking - remove unwanted code

import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",{
    id: "tcharr",
},"tchar")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);