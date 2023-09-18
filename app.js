
import React from "react";
import ReactDOM from "react-dom/client";

//  JSX 
const Container = () =>( <div id="container">
              <h1> Namaste React</h1>
            <h2> Namaste React</h2>
          </div>
);


// React component
// Functional Component - Functional component is a noraml function whic return JSX or any React element.
// It is a good practice to start the name of your componenet with capital letter.But its is not mandatory.

const HeaderComponent = () => {
    return (
         <div>
         {Container()}
        <h1> Namaste React</h1>
        <h2> Namaste React</h2>
        </div>
 );
}
// you call call a function inside the { container_for_example } or can write any Js code. This is known a component composistion.

const root = ReactDOM.createRoot(document.getElementById("root"));

//    passing a react element inside the root.
//    passing a react component insidethe root we use root.render(< Name_of_component />) .

root.render(<HeaderComponent />);