
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
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";




const AppLayout = () => {

  const [user, setUser] = useState({
    name: "kanhaiya pandey",
    email: "kanhaiyapandey2232@gmail.com"
  })

  return (
    
    <React.Fragment>
      <Provider store = {store}>
      <UserContext.Provider value={{
        user:user
        }}>
     <Header/>
     <Outlet/>
     <Footer/>
     </UserContext.Provider>
     </Provider>
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
       },
       {
        path: "/cart",
        element: <Cart/>
       }
      
    ],
   },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);