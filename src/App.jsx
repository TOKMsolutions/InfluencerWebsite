import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./sections/Home";
import Lookbook from "./sections/Lookbook";

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
    ]);

    return routes;
}

export default App;
