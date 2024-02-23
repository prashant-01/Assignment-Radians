import React from "react";
import Heading from "./Heading";
import Cards from "./Cards";
import Deals from "./Deals";
import Signup from "./Signup";
const Body = () => {
    return(
        <div className="w-8/12 mx-auto">
            <Heading/>
            <Cards />
            <Deals/>
            <Signup/>
        </div>
    )
}

export default Body;