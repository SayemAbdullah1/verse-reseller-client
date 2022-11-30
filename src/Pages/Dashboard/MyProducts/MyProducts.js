import React, {  } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const MyProducts = () => {

    const url = `http://localhost:5000/allProducts`;

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url, {
                
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000//allProducts/seller/${product._id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            <h3 className="text-3xl mb-5 mt-3 text-secondary text-center">My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.picture} alt="Car pictures" />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>${product.resalePrice}</td>
                                <td>
                                    <button onClick={() => handleDeleteProduct(product)}
                                        className='btn btn-secondary btn-sm'
                                    >Delete</button>
                                   
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;