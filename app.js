const heading = React.createElement("h1",{},"namaste everyone ! ");

const heading2 = React.createElement("h2",{},"namaste everyone ! ");


const container = React.createElement("div",{id: "container"},[heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));


//    passing a react element inside the root.

root.render(container);