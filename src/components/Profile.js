import { useEffect, useState } from "react";

const Profile = (props) =>{
    const [count,SetCount]= useState(0);
    const [count2,SetCount2]= useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("nm react1")
        }, 1000);
        console.log("useeffect");

        return ()=>{
            clearInterval(timer);
            console.log("useeffect return")
        }
    },[])
    console.log("functional render function");
    return(
        <div>
        <h1>profile page</h1>
        <h2>XYZ: {props.name}</h2>
        <h2>Count: {count}</h2>
        <button onClick={() => 
        SetCount(1)}>
        SetCount
        </button>
        </div>
    )
}

export default Profile;