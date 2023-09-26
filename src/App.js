
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";




const AppLayout = () => {
  return (
    <React.Fragment>
     <Header/>
     <Outlet/>
     <Footer/>
      </React.Fragment>    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children : [
      {
        path: "/about",
        element: <About/>,
       },
       {
        path: "/contact",
        element: <Contact/>,
       },
       {
        path: "/",
        element: <Body/>,
       },
       {
        path: "/resturant/:resId",
        element: <ResturantMenu/>
       }
      
    ],
   },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);