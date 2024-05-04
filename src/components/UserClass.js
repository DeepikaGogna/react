import React from "react";

class UserClasss extends React.Component {
    //when class load first constructor will called  then render will called
    constructor(props){
        console.log("Child Constructor");
        super(props);

        this.state = {
            count:1,
            count2:2,
            userInfo:{
                name:"Dummy",
                location: "Default",
            }
        };
    
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Deepika");
        const json = await data.json();
        this.setState({
            userInfo:json
        })
        this.timer = setInterval(() => {
           console.log("SetInveral"); 
        },1000);
        console.log(json);
        console.log("It will called after constructor and render function. We are calling API here. So my UI will load first then api data will call.");
        console.log("Child Component Did Mount");
    }

    componentDidUpdate(){
        console.log("Child Component Did Update");
        clearInterval(this.timer);
    }

    componentWillUnmount(){
        console.log("Child Component Will Mount. when we are leaving the page then this Mount will load");
    }

    render(){
        console.log("Child Render");
        const {name1} = this.props;
        const {count, count2} = this.state
        const {name, location} = this.state.userInfo;
        return (
            <div className="user-container">
                <h2>Count: {count}</h2>
                <h2>Count2: {count2}</h2>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>Contact: @deepika.sachdeva23</h3>
                <button
            onClick={() => {
              this.setState({
                count: this.state.count+1
              })
            }}>Count Increment</button>
            </div>
        );
    }
}

export default UserClasss;

/*****
 * MOUNTING LIFE CYCLE
 * constructor (dummy)
 * Render (dummy)
 *      <HTML dummy>
 * Component Did Mount
 *      <API call>
 *      <this.setState> -> state variable is updated
 * 
 * --Update
 * render (API data)
 * <HTML (new API Data) />
 * Component Did Update
 * 
 */