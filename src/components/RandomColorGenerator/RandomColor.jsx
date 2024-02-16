import React, { useEffect, useState } from 'react'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex"); 
    const [color, setColor] = useState('#000000');


    const randomColorCode = (length)=>{
        return Math.floor(Math.random()*length);
    }


    const handleRandomHexColor =()=>{
        const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]
        var hexCode = "#";

        for(var i= 0; i <6; i ++){
            hexCode += hex[randomColorCode(hex.length)];
        }
        setColor(hexCode); 
    }

    const handleRandomRGBColor =()=>{
        var r = randomColorCode(256);
        var g = randomColorCode(256); 
        var b = randomColorCode(256);

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if (typeOfColor === 'hex') {
          handleRandomHexColor();
        } else if (typeOfColor === 'rgb') {
          handleRandomRGBColor();
        }
      }, [typeOfColor]);

  return (
    <div style={{width: "100vw",
                 height: "100vh",
                 background: color    }}>
        <button className='bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded mx-2'
            onClick={()=>setTypeOfColor('hex')}>
            Create HEX color</button>
        <button className='bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded mx-2'
            onClick={()=>{setTypeOfColor('rgb')}}>
            Create RGB color</button>
        <button className='bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded mx-2'
            onClick={typeOfColor ==='rgb'? handleRandomRGBColor: handleRandomHexColor}>
            Generate random Color</button>

        <div className='flex flex-col h-2/4 justify-center items-center text-3xl font-extrabold gap-3'>
            {typeOfColor.toUpperCase()} Color 
            <div>
                {color}
            </div>
        </div>
    </div>
  )
}

export default RandomColor