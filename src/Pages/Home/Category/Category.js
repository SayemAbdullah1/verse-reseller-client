import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { data } from '../../../componants/CategoryData';
import CategoryCart from './CategoryCart';


const Category = () => {
    // const categories = useLoaderData()
    const [categories, setCategories] = useState([])

    

    useEffect( ()=>{
        fetch('https://verse-reseller-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data)
            )
        console.log(data);
    }, [])
    return (
        <div className='my-10 mb-36' data-aos="fade-up"
            data-aos-duration="3000">
            <div className="text-5xl mb-24 text-center font-bold text-secondary my-6">Products Category</div>
            <div className=' max-w-[1640px] mx-auto p-4 py-12 gap-6 text-center grid grid-cols-1 lg:grid-cols-3'>
                {
                    categories.map(singleCat => 
                        // (
                    //     <>
                    //         <div className='rounded-xl relative'>
                    //             <div className='absolute text-white bg-black/40 w-full h-full rounded-xl'>
                    //                 <p className='font-bold text-2xl px-2 pt-4 mb-6'>{singleCat.category}</p>

                    //                 <Link to={`/category/${singleCat.category_id}`}>

                    //                     <button className='btn btn-secondary border-white mt-3 text-black mx-2 bottom-4'>See All Products</button>
                    //                 </Link>
                    //             </div>
                    //             <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={singleCat.image} alt="/" />
                    //         </div></>
                    // )
                    
                    <CategoryCart
                        key={singleCat.category_id}
                    singleCat={singleCat}
                    ></CategoryCart>

                    // <button className="btn btn-outline btn-info text-center gap-6 mx-6"
                    //     key={singleCat._id}>
                    //     <Link to={`/category/${singleCat.category_id}`}>
                            
                    //             {singleCat.name}
                    //         </Link>
                    // </button>

                    )
                }
            </div>
        </div>
    );
};

export default Category;