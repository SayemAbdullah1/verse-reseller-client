import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';
import Category from '../../Pages/Home/Category/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login.js/Login';
import Blog from '../../Pages/Shared/Blog/Blog';
import SignUp from '../../Pages/SignUp.js/SignUp';

const route = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/blogs',
            element: <Blog></Blog>
        },
        {
            path:'/category/:id',
            element:<CategoryDetails></CategoryDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
    ]
}
])

export default route;