
const Title = () => {
    return(
    <img className="logo"
     src={"https://img.freepik.com/premium-photo/3d-restaurant-application-icons_460848-11259.jpg?w=826"}></img>
  );
  }

const Header = () => {
    return (
      <div className="header">
        {Title()}

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i className="fa-solid fa-cart-shopping fa-sm"></i></li>
          </ul>
        </div> 
      </div>

      
    );
  };

  export default Header;