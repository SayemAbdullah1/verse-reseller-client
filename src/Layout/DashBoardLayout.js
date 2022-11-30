import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import UseBuyer from '../hooks/UseBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = UseBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-slate-200 pe-6">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isBuyer &&
                            <li><Link to="/dashboard">Orders</Link></li>
                        }
                        {
                             

                             isAdmin && <>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/allbuyer">All buyers</Link></li>
                             </>
                                
                                
                                
                               
                        
                        }
                        {
                            // isSeller &&
                            <li><Link to="/dashboard/myproducts">My Products</Link></li>
                        }

                    </ul>

                </div>
            </div>
        </div>
        
    );
};

export default DashBoardLayout;