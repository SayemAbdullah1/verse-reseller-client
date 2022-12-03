import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
const navigate = useNavigate()

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const condition = form.condition.value;
        const resalePrice = form.resalePrice.value;
        const purshaseYear = form.purshaseYear.value;
        const originalPrice = form.originalPrice.value;
        const category_name = form.category_name.value;
        const useYears = form.useYears.value;
        const sellerName = form.sellerName.value;
        const category_id = form.category_id.value;

        const booking = {
            name,
            picture,
            condition,
            resalePrice,
            purshaseYear,
            category_name,
            originalPrice,
            useYears,
            sellerName,
            category_id
        }

        fetch('https://verse-reseller-server.vercel.app/allProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                    toast.success('Product item is booked');
                navigate('/dashboard/myproducts')
                // if (data.acknowledged) {     
                // }
                // else {
                //     toast.error(data.message);
                // }
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center text-secondary font-bold mb-6'>Add Products</h2>
                <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>

                   

                    <input name="name" type="text"  placeholder="Product Name" className="input w-full input-bordered" required/>

                    <input name="picture" type="text"  placeholder="Image URL" className="input w-full input-bordered" required/>
                    <div className='flex '>
                        <label>
                            <div className="text-1xl w-full">Condition</div>
                            <select type="text" name='condition'
                                className='my-5 p-3' required>
                                <option selected>Excellent</option>
                                <option >Good</option>
                                <option >Fair</option>
                            </select>
                        </label>

                        <label className='pl-10'>
                            <div className="text-1xl">Category Name</div>
                            <select type="text" name='category_name'
                                className='my-5 p-3' required>
                                <option selected>Electric</option>
                                <option >Microbus</option>
                                <option >Luxury</option>
                            </select>
                        </label>
                    </div>

                    <input name="resalePrice" type="text"  placeholder="Real Price" className="input w-full input-bordered" required/>

                    <input name="purshaseYear" type="text"  placeholder="Purchase year" className="input w-full input-bordered" required/>

                   

                    <input name="originalPrice" type="text"  placeholder="Original Price" className="input w-full input-bordered" required/>

                    <input name="useYears" type="text" placeholder="Year of uses" className="input w-full input-bordered" required/>

                    <input name="sellerName" type="text" placeholder="Seller Name" className="input w-full input-bordered" required/>

                   <label>
                    <div className="text-1xl">Category ID</div>
                        <select type="text" name='category_id'
                            className='my-5 p-3' required>
                            <option selected>01</option>
                            <option >02</option>
                            <option >03</option>
                        </select>
                   </label>
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default AddProducts;