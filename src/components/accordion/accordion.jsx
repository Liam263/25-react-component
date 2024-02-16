import React, { useState } from 'react'
import data from './data'
const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const [enableMulti, setEnableMulti] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);


    const handleSingleSelection = (id) => {
        setSelected( id === selected? null: id)
    }
    const handleMultiSelection = (id) => {
        let copy = [...multiSelected]; 
        if (copy.indexOf(id)=== -1){
            copy.push(id)

        } else {
            copy.splice(copy.indexOf(id), 1)

        }
        setMultiSelected(copy)
        console.log(copy);
    }
  return (
    <div className='flex h-screen w-screen flex-col  items-center  gap-5'>
        <button
        className='bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded'
        onClick={() => setEnableMulti(!enableMulti)}
    >
        {enableMulti ? 'Enable Single Selection' : 'Enable Multi Selection'}
    </button>
        <div className='w-[500px] mx-auto '>
            {data.map((data, id)=> (
                <div className='bg-gray-500 mt-3 p-2' onClick={ enableMulti?()=>handleMultiSelection(id): ()=>handleSingleSelection(id)}>
                    <div className='flex font-extrabold cursor-pointer justify-between align-middle text-white'>{data.question}
                    <span>+</span>
                    
                    </div>
                    {enableMulti? 
                        multiSelected.indexOf(id) !== -1 && (
                            <div>{data.answer}</div>
                        )
                    : selected === id && <div className='text-white h-auto'>{data.answer}</div>}
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Accordion