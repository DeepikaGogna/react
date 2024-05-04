import { useEffect, useState } from "react";

const User = (props)=>{
    let [count, setCount] = useState(1);
    const [count2, setCount2]  = useState(2);
 useEffect(() => {
    // API call So first UI will load then we are calling api we are using use
    setInterval(() => {
        console.log("SetInveral User"); 
     },1000);
     //For Unmount anything we are using return statement
     return() =>{
        console.log("useEffect Return");
     };
},[]) 

    return (
        <div className="user-container">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h2>Name : {props.name}</h2>
            <h3>Location : Chandigarh</h3>
            <h3>Contact: @deepika.sachdeva23</h3>
            <button
            onClick={() => {
                setCount(count + 1);
            }}>Count Increment</button>
        </div>
    );
}

export default User;