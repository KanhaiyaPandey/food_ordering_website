import { createContext } from "react";

const UserContext = createContext({
    user: {
    name:"jojo",
    email:"jojosiro@gmail.com"
}});
export default UserContext;