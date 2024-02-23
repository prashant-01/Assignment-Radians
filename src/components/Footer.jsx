import React from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
const Footer = () => {
    return(
        <div className="flex justify-around bg-[#212731] text-xs text-[#B6BDC4] w-full pb-28 pt-8">
            <div className="flex gap-16">
                <div className="flex flex-col gap-3">
                    <p className="text-[16px] pb-2">Categories</p>
                    <p>Web Builder</p>
                    <p>Hosting</p>
                    <p>Data Center</p>
                    <p>Robotic-Automation</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-[16px] pb-2">Contact</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>Categories</p>
                    <p>About</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <p>United States </p>
                <RiArrowDropDownLine/>
            </div>
        </div>
    )
}

export default Footer;