import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./sections/Home";
import Lookbook from "./sections/Lookbook";
import Shop from "./sections/Shop";
import Contact from "./sections/Contact";

function App() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        { 
            //lookbook once opened
            path: '/lookbook/:id',
            element: <Lookbook />,
        },
        { 
            
            path: '/shop',
            element: <Shop />,
        },
        { 
            
            path: '/shop/#contact',
            element: <Contact />,
        },
    ]);
    
    return routes;
}

export default App;
