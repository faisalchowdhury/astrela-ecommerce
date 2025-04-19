import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const Product = ({product}) => {
    const {title,image,rating} = product;
    return (
        <div className='border border-slate-100  shadow rounded-xl p-5 cursor-grab'>
            <div className='flex justify-center py-10 ' >
            <img className='h-[200px] w-3/5' src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <p className='flex gap-2 items-center'> Rating 
        <BsFillStarFill color='orange' />
              ({rating?.rate})</p>
        </div>
    );
       
};

export default Product;