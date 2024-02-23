import React from "react";
import RatingStars from "./RatingStars";
import { IoIosArrowDown } from "react-icons/io";
import image from "../utils/assets/image.png"
import { IoIosCheckmark } from "react-icons/io";
const SpecialCard = () => {
    return(
        <div>
            <div className="flex justify-around bg-white rounded-lg px-4 mt-12">
                <div className="flex flex-col items-center justify-center gap-3">
                    <img src={ image } className="w-[150px] h-[100px]"/>
                    <p className="text-[#626E79]">CDK</p>
                </div>
                <div className="flex flex-col gap-3 text-[#4B5665] py-3">
                    <div className="flex">
                        <p className="w-[550px] text-wrap ">
                        <span className="font-semibold">CDK Resposive Builder : </span>
                        An extensive library of widgets and apps, and detailed step-by-step guides</p>
                    </div>
                    <div>
                        <p className="p-1 rounded-md bg-[#F3F9FF] text-[#074786] max-w-max text-xs">26% Off</p>
                        <p className="font-semibold">Main Highlights</p>
                        <div className="w-[500px] text-wrap p-4 ml-5 bg-[#FFF4ED] rounded-lg">
                            <div>
                                <p className="flex gap-x-3">
                                    <span className="p-1 bg-white text-[#1B88F4] rounded-lg">9.9</span>
                                    <span className="text-[#4B5665]">Building Responsive</span>
                                </p>
                                <p className="mt-2 flex gap-x-3">
                                    <span className="p-1 bg-white text-[#1B88F4] rounded-lg">8.9</span>
                                    <span className="text-[#4B5665]">Cool</span>
                                </p>
                                <p className="mt-2 flex gap-x-3">
                                    <span className="p-1 bg-white text-[#1B88F4] rounded-lg">8.9</span>
                                    <span className="text-[#4B5665]">Docs</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="">Why we love it</p>
                        <div className="w-[500px] text-wrap rounded-lg">
                            <div>
                                <p className="flex gap-x-3">
                                    <span className="p-1 bg-[#F3F9FF] text-[#074786] rounded-[100%] flex items-center justify-center"><IoIosCheckmark/></span>
                                    <span className="text-[#4B5665]">Building Responsive</span>
                                </p>
                                <p className="mt-2 flex gap-x-3">
                                    <span className="p-1 bg-[#F3F9FF] text-[#074786] rounded-[100%] flex items-center justify-center"><IoIosCheckmark/></span>
                                    <span className="text-[#4B5665]">Cool</span>
                                </p>
                                <p className="mt-2 flex gap-x-3">
                                    <span className="p-1 bg-[#F3F9FF] text-[#074786] rounded-[100%] flex items-center justify-center"><IoIosCheckmark/></span>
                                    <span className="text-[#4B5665]">Docs</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="flex gap-2 items-center text-[#1B88F4]"><span>Show more</span> <IoIosArrowDown/></p>
                </div>
                <div className="flex flex-col items-center justify-between pb-3">
                    <div className="bg-[#F3F9FF] rounded-b-lg flex flex-col gap-3 items-center justify-center p-4">
                        <p className="text-[#074786] text-4xl font-semibold">9.1</p>
                        <p className="text-[#074786]">Very Good</p>
                        <RatingStars Review_Count={ 4.1 }/>
                    </div>
                    <button className="w-full rounded-lg bg-[#1B88F4] px-4 py-2 text-white"> View</button>
                </div>
            </div>
        </div>
    )
}
export default SpecialCard;