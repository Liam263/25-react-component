import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";


const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const fetchImages = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setImages(data);
    }

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
        // console.log(currentSlide)

    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
        // console.log(currentSlide)


    }
    useEffect(() => {
        fetchImages()
    }, [])
    // console.log(images)
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center'>
                <BsArrowLeftCircleFill onClick={() => handlePrev()} size={40} className='cursor-pointer' />
                <div className='w-[300px] '>
                    {images.map((item, id) => (
                        <img
                            key={id}
                            src={item.image}
                            className={currentSlide === id ? 'flex ' : 'hidden'}

                        />
                    ))}
                </div>
                <BsArrowRightCircleFill onClick={() => handleNext()} size={40} className='cursor-pointer' />
            </div>

            <div className='flex gap-1'>
                {images.map((item, id) => (
                    <FaCircle 
                    key={id} 
                    className={currentSlide === id ? 'text-purple-600' : 'text-rose-300'} 
                    onClick={()=>setCurrentSlide(id)}
                    size={40}/>


                ))}
            </div>
        </div>
    )
}

export default ImageSlider