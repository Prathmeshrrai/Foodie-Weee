import { createContext } from "react";

const UserContext= createContext({
    user:{
        name:"rai",
        email:"raiprath71",
    },
});

UserContext.displayName = "UserContext"

export default UserContext;