import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const StarRating = ({numOfStars = 5}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRating = (rating) =>{
        setRating(rating)
    }

    const handleMouseHover = (hover) =>{
        setHover(hover);
    }

    const handleMouseLeave = () =>{
        setHover(0); 
    }
  return (
    <div className='flex  justify-center items-center h-screen'>
        {[...Array(numOfStars)].map((_,index)=> {
            index +=1; 

            return (
                <FaStar
                key={index}
                className={index <= (hover||rating)? 'text-amber-300': 'text-slate-500'	 }
                onClick={()=>handleRating(index)}
                onMouseOver={()=>handleMouseHover(index)}
                onMouseLeave={()=>handleMouseLeave()}
                size={40}
                />
            )
        })}
    </div>
  )
}

export default StarRating