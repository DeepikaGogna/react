import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
    // React Element
    const JSXHeading = ( 
    <h1 id="heading">React with JSX</h1>
 );
   
  
  
      

    const AppLayout = () => (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(JSXHeading); // render Element
    root.render(<AppLayout />); // render Component