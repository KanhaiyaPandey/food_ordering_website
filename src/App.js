
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";




const AppLayout = () => {

  const [user, setUser] = useState({
    name: "kanhaiya pandey",
    email: "kanhaiyapandey2232@gmail.com"
  })

  return (
    
    <React.Fragment>
      <UserContext.Provider value={{
        user:user
        }}>
     <Header/>
     <Outlet/>
     <Footer/>
     </UserContext.Provider>
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