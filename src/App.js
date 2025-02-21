import React, {lazy, Suspense, useState} from 'react';
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
import Shimmer from './components/Shimmer.js';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import Cart from './components/Cart.js';
//import InstaMart from './components/InstaMart.js';

    const InstaMart = lazy(()=> import("./components/InstaMart"));


    const AppLayout =()=>{

        const [user,setUser]= useState({
            name: "prathmesh",
            email:"raiprathmesh.com"
        });

        return(
            <Provider store={store}>
            <UserContext.Provider 
            value={{
                user: user,
                setUser: setUser,
                // {
                //     name:"rai",
                //     email:"raiprath71",
                // },
            }}>
                <Header/>
                <Outlet/>
                <Footer/>
            </UserContext.Provider>
            </Provider>
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
                    // (
                    //     <Suspense fallback={<h1>Loading.....</h1>}>
                    //     <About/>
                    //     </Suspense>
                    // )
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
                {
                    path:"/instamart",
                    element:<Suspense fallback={<Shimmer/>}> 
                        <InstaMart/>
                    </Suspense>,
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
            ]
        },
    ]);

    //or <h1>loading</h1>

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter} />);
