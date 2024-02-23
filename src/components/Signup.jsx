import React from "react";
const Signup = () => {
    return(
        <div className="flex my-24 items-center justify-between">
            <div className="w-[450px] text-4xl text-[#5C6874]">
                Sign up and get exclusive special deals
            </div>
            <div className="flex">
                <input className="rounded-l-lg h-10"/>
                <button className="text-white bg-[#1B88F4] rounded-r-lg h-10 p-4 flex items-center justify-center">Sign Up</button>
            </div>
        </div>
    )
}

export default Signup;