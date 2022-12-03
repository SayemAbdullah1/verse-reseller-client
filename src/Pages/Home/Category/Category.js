import React, { useEffect, useState } from 'react';
import {useQuery,} from '@tanstack/react-query'
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const [category, setCategory] = useState([])

    useEffect(()=> {
        fetch('https://verse-reseller-server.vercel.app/category')
        .then(res => res.json())
            .then(category => setCategory(category))
    })
    return (
        <div className='my-10 mb-36'>
            <div className="text-5xl text-center font-bold text-secondary my-6">Products Category</div>
            <div className='gap-6 text-center grid grid-cols-1 w-52 mx-auto'>
                {
                    category.map(singleCat => <button className="btn btn-outline btn-info text-center gap-6 mx-6"
                        key={singleCat._id}>
                        <Link to={`/category/${singleCat.category_id}`}>
                                {singleCat.name}
                            </Link>
                    </button>)
                }
            </div>
        </div>
    );
};

export default Category;