import React from "react";
import image from "../utils/assets/image.png";
import { IoIosArrowDown } from "react-icons/io";
import RatingStars from "./RatingStars";
import { SlDiamond } from "react-icons/sl";
import { GoTrophy } from "react-icons/go";
const Card = ({ card }) => {
    return(
        <div>
            <div className="flex justify-around bg-white rounded-lg px-4">
                <div className="flex flex-col items-center justify-center gap-3">
                    <img src={ image } className="w-[150px] h-[100px]"/>
                    <p className="text-[#626E79]">{ card.imageName }</p>
                </div>
                <div className="flex flex-col gap-3 text-[#4B5665] py-3">
                    <div className="flex">
                        <p className="w-[550px] text-wrap "><span className="font-semibold">{ card.title }</span>{ card.description }</p>
                    </div>
                    <div>
                        <p className="font-semibold">Main Highlights</p>
                        <p className="w-[550px] text-wrap pl-5">{ card.highlights }</p>
                    </div>
                    <p className="flex gap-2 items-center text-[#1B88F4]"><span>Show more</span> <IoIosArrowDown/></p>
                </div>
                <div className="flex flex-col items-center justify-between pb-3">
                    <div className="bg-[#F3F9FF] rounded-b-lg flex flex-col gap-3 items-center justify-center p-4">
                        <p className="text-[#074786] text-4xl font-semibold">{card.rating}</p>
                        <p className="text-[#074786]">{card.grade}</p>
                        <RatingStars Review_Count={ card.rating-5 }/>
                    </div>
                    <button className="w-full rounded-lg bg-[#1B88F4] px-4 py-2 text-white"> View</button>
                </div>
            </div>
        </div>
    )
}

export const cardWithLabel = (Card) => {
    return ({ card , id }) => {
        return(
            <div className="relative">
                <label className="absolute -top-3 text-white flex items-center justify-center px-4 py-2 rounded-r-md bg-[#FF7724]">
                    {
                        id == 0 ? <p className="flex gap-2 items-center justify-center"><GoTrophy/><span>Best Choice</span></p>
                        : <p className="flex gap-2 items-center justify-center"><SlDiamond/><span>Best Value</span></p>
                    }
                </label>
                <Card card={ card } />
            </div>
        )
    }
}

export default Card