import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

// const About =() =>{
//     return(
//         <div>
//             <h1>About us Page</h1>
//             <p>
//                 {" "}
//                 This is the React project
//             </p>
//             <ProfileClass name={"Rai"} />
//             <Profile name={"Rai"} xyz="abc" />
//         </div>
//     )
// };

class  About extends Component{

    constructor(props){
        super(props);
        console.log("parent- constructor");
    }

    componentDidMount(){
        //best place to make api call because it is after render
        console.log("parent- componentDidMount");
    }

    render(){
        console.log("parent- render");
        return(
            <div>
                <h1>About us Page</h1>

                <UserContext.Consumer>
                {({user}) => <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>}
                {/* {user}=value ,, {(value)=>console.log(value) */}
                </UserContext.Consumer>
                    
                <p>
                    {" "}
                    This is the React project
                </p>
                <ProfileClass name={"First child "} xyz="abc"/>
                <Profile name={"Rai1"} xyz="abc" />
                {/* <ProfileClass name={"Second child"} xyz="abc"/>
                    <Profile name={"Rai2"} xyz="abc" /> */}
            </div>
        )
    }
}

export default About;