import React from "react";
import { cards } from "../utils/constants"; 
import Card , { cardWithLabel } from "./Card";
import SpecialCard from "./SpecialCard";
const Cards = () => {
    const FeatureCard = cardWithLabel( Card );
    return(
        <div className="my-16">
            <div className='flex flex-col gap-12'>
                {
                    cards.map( (card , index) => (
                        <div key={ index }>
                            {
                                (index === 0 || index === 1) ? <FeatureCard card={ card } id={ index }/>
                                : <Card card={ card } />
                            }
                        </div>
                    ))
                }
            </div>
            <SpecialCard />
        </div>
    )
}

export default Cards;