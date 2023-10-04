import { createContext } from "react";

const UserContext = createContext({
    user: {
    name:"jojo",
    email:"jojosiro@gmail.com"
}});

UserContext.displayName= "UserContex";

export default UserContext;