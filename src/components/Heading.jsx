import React from "react"
import { SlCheck } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { list } from "../utils/constants";
const Heading = () => {
    return (
        <div>
            <p className="text-4xl font-semibold border-b py-3">Best Website builders in the US</p>
            <div className="flex justify-between items-center text-[#4B5665] py-3 border-b">
                <div className="flex gap-6">
                    <p className="flex gap-2 items-center "><SlCheck/> <span>Last Updated - February 22, 2020</span></p>
                    <p className="flex gap-2 items-center"><IoIosInformationCircleOutline size={`1.25rem`}/><span>Advertising Disclosure</span></p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>Top Relevant</p>
                    <IoIosArrowDown/>
                </div>
            </div>
            <div className="flex gap-4 py-3">
                {
                    list.map((item , index) => (
                        <div key={index} className="bg-white p-2 rounded-lg text-[#4B5665]">{item}</div>
                    ))
                }
            </div>
            <div className="flex gap-2 text-[#727D87] items-center">
                <p className="text-sm">Home</p>
                <MdKeyboardArrowRight/>
                <p className="text-sm">Hoisting for all</p>
                <MdKeyboardArrowRight/>
                <p className="text-sm">Hoisting</p>
                <MdKeyboardArrowRight/>
                <p className="text-sm">Hoisting6</p>
                <MdKeyboardArrowRight/>
                <p className="text-sm">Hoisting5</p>
            </div>
        </div>
    )
}

export default Heading;