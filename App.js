import React from "react";
import ReactDOM from "react-dom/client";

    // React Element
    const JSXHeading = ( 
    <h1 id="heading">React with JSX</h1>
 );
    // Title Functional Component
    const Title = () => {
        return <h1>Title Component</h1>
    }

    // React Functional Component
    const HeadingComponent2 = () => {
        return <h1>React Functional Component</h1>
    };

    const HeadingComponent = () => (
        <div id="container" >
            <Title />
            <Title></Title>
            {Title()}
         <h1>React Functional Component</h1>
         </div>
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(JSXHeading); // render Element
    root.render(<HeadingComponent />); // render Component