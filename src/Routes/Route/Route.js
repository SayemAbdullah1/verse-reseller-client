import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../Layout/DashBoardLayout';
import Main from '../../Layout/Main';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSeller from '../../Pages/Dashboard/AllSeller/AllSeller';
// import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import Orders from '../../Pages/Dashboard/Orders/Orders';
import Category from '../../Pages/Home/Category/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login.js/Login';
import Blog from '../../Pages/Shared/Blog/Blog';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import SignUp from '../../Pages/SignUp.js/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';

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
            loader: ({ params }) => fetch(`https://verse-reseller-server.vercel.app/category/${params.id}`)
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
            path: '/dashboard/order',
            element: <BuyerRoute><Orders></Orders></BuyerRoute>
        },
        {
            path: '/dashboard/allseller',
            element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
        },
        {
            path: '/dashboard/allbuyer',
            element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
        },
        {
            path: '/dashboard/myproducts',
            element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
        },
        {
            path: '/dashboard/addproducts',
            element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
        }
    ]
}
])

export default route;