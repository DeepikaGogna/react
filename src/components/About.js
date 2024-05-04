import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        console.log("Parent Constructor");
        super(props);
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent Render");
        return (
            <div className="body-container">
                <h1>About</h1>
                <h2>Hello About Page</h2>
                <User name={"Deepika"}/>
                <UserClass name={"Deepika Class"}/>
            </div>
        );
    }
}
/* const About = ()=> {
    return (
        <div className="body-container">
            <h1>About</h1>
            <h2>Hello About Page</h2>
            <User name={"Deepika"}/>
            <UserClass name={"Deepika Class"}/>
        </div>
    );
} */

export default About;
