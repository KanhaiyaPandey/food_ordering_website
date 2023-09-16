
/**  Doings of parcel
 * 
 * Created A Server
 * HMR - Hot Module Replacement.
 * File Watcher Algorithm - C++.
 * Bundling
 * Minimization
 * Compression
 * Cleaning Our Code.
 * Super fast algorithm.
 * Media Optimization.
 * Caching While Development.
 * Older version browser Compatablity.
 * 
 * 
 * 
 * 
 * */ 

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id: "title"},"namaste everyone ! ");

const heading2 = React.createElement("h2",{id: "title"},"namaste everyone ! ");


const container = React.createElement("div",{id: "container"},[heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));


//    passing a react element inside the root.

root.render(container);