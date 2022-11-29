import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../Layout/DashBoardLayout';
import Main from '../../Layout/Main';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import Orders from '../../Pages/Dashboard/Orders/Orders';
import Category from '../../Pages/Home/Category/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login.js/Login';
import Blog from '../../Pages/Shared/Blog/Blog';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import SignUp from '../../Pages/SignUp.js/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const route = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
            element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
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
},
{
    path:'/dashboard',
    element: <DashBoardLayout></DashBoardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/dashboard',
            element: <Orders></Orders>
        },
        {
            path: '/dashboard/allusers',
            element: <AllUsers></AllUsers>
        },
        {
            path: '/dashboard/allbuyer',
            element: <AllBuyers></AllBuyers>
        },
        {
            path: '/dashboard/myproducts',
            element: <MyProducts></MyProducts>
        }
    ]
}
])

export default route;