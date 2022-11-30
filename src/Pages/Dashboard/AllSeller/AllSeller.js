import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://verse-reseller-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteSeller = seller => {
        fetch(`https://verse-reseller-server.vercel.app/users/admin/${seller._id}`, {
            method: 'DELETE'
           
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl mb-5 mt-3 text-secondary text-center">All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verification</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                seller?.role === 'seller' &&
                                <tr key={seller._id}>
                                    <th>{ }</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td><button className='btn btn-xs bg-accent'>Verify</button></td>
                                        <td><button onClick={() => handleDeleteSeller(seller)} className='btn btn-xs bg-red-600'>Delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default AllSeller;