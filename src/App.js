import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
    // React Element
    const JSXHeading = ( 
    <h1 id="heading">React with JSX</h1>
 );
  
 // Different Name
 // Chunking
 // Code Spliting
 // Dynamic Bundling
 // lazy loading
 // on demand laoding
 // dynamic import
 
 // If we want to split our component into different bundlers
 const Grocery = lazy(() => import("./components/Grocery"))
      

    const AppLayout = () => (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );

    const appRouter = createBrowserRouter([
      {
        path:"/",
        element:<AppLayout/>,
        children:[
          {
            path:"/",
            element:<Body/>
          },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/grocery",
          element:<Suspense fallback={<h1>loading.....</h1>}><Grocery/></Suspense>
        },
        {
          path:"/resturants/:resId",
          element:<ResturantMenu/>
        }],
        errorElement: <Error />
      }
     
    ])

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(JSXHeading); // render Element
    root.render(<RouterProvider  router={appRouter}/>); // render Component