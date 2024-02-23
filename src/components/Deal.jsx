import React from "react";
import image from '../utils/assets/image.png'
const Deal = () => {
    return(
        <div className="bg-white p-3 rounded-lg mr-3">
            <div className="flex items-center justify-center p-6">
                <img src={image} className="w-[150px] h-[100px]"/>
            </div>
            <div className="flex gap-1">
                <p className="p-1 rounded-md bg-[#F3F9FF] text-[#074786] max-w-max text-xs">26% Off</p>
                <p className="p-1 rounded-md bg-[#F3F9FF] text-[#074786] max-w-max text-xs">Limited time</p>
            </div>
            <div className="text-[#5C6874] flex items-center justify-center font-semibold">Webbuilder 1</div>
            <div className="text-[#5C6874]">Computer  Modern clasic with wix support</div>
            <div className="flex gap-3 items-center">
                <p className="text-[#5C6874] text-lg">$39.96</p>
                <p className="text-[#9FA9B3]">$49.96</p>
                <p className="text-[#EF4C5D]">(20% Off)</p>
            </div>
            <button className="w-full rounded-lg bg-[#1B88F4] px-4 py-2 text-white"> View</button>
        </div>
    )
}

export default Deal;