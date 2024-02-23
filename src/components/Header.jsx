import React from 'react';
import { RiSearchLine } from "react-icons/ri";
const Header = () => {
    return (
        <div className='font-inter flex items-center justify-center gap-16 p-4 w-full bg-[#212731] text-[#D1D6DA] '>
            <div>
                <input 
                type="text"
                className='relative rounded-md focus:outline-none'
                />
                <p className='absolute top-5 left-[360px] text-[#626E79]'><RiSearchLine/></p>
            </div>
            <div className=''>Categories</div>
            <div>Website Builders</div>
            <div>Today's deals</div>
        </div>
    )
}

export default Header;