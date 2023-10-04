import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Title = () => {


    return(
    <img className="logo"
     src={"https://img.freepik.com/premium-photo/3d-restaurant-application-icons_460848-11259.jpg?w=826"}></img>
  );
  };

  // SPA - Single Page App.
  // server-side Routing - in the we are making a network req to the server.
  // client-Side Routing - in this we dont have to make network request to the server.

const Header = () => {
  const {user} = useContext(UserContext);
    return (
      <div className="header">
        {Title()}

        <div className="nav-items">
          <ul>
          <li className="link">{user.name}</li>
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/about">About Us</Link></li>
            <li><Link className="link" to="contact">Contact Us</Link></li>
            <li className="link"><i className="fa-solid fa-cart-shopping fa-sm"></i></li>
            <li className="link"><i class="fa-solid fa-user"></i></li>
          </ul>
        </div> 
      </div>

      
    );
  };

  export default Header;