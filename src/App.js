import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Body from './components/Body.js';
import About from './components/About.js';
import Error from './components/Error.js';
import Profile from './components/Profile.js';
import Contact from './components/Contact.js';
import RestaurantMenu from './components/RestaurantMenu.js';

    const AppLayout =()=>{
        return(
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        )
    }

    
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            errorElement:<Error/>,
            children: [
                {
                path:"/",
                element:<Body/>,
                },
                {
                    path:"/",
                    element:<AppLayout/>,
                },
                {
                    path:"/about",
                    element:<About/>,
                    children: [
                        {
                        path:"profile",
                        element:<Profile/>,
                        },
                    ]
                },
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/restaurant/:id",
                    element:<RestaurantMenu/>,
                },
            ]
        },
    ]);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter} />);
