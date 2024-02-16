import React, { useEffect, useState } from 'react'

const LoadMoreButton =  () => {
    const [products, setProducts] = useState([]); 
    const [count, setCount]= useState(0);
    const [disabled, setDisabled]= useState(false)

    const fetchData = async () =>{
        const response = await fetch(`https://dummyjson.com/products?limit=5&skip=${count ===0? 0: count *10}`);
        const data = await response.json();
        console.log(data);

        if( data && data.products && data.products.length)
        setProducts((prev)=>[...prev, ...data.products])
    }


    useEffect(() =>{
        fetchData();
    },[count])

    useEffect(() =>{
        if(products.length ===100) setDisabled(true);
    },[products])

    console.log(count)
    console.log(products)
    return (
    <div className='flex flex-col gap-5 '>
        <div className='grid grid-cols-5 gap-2'>
            {products && products.length
             ? products.map((product)=>(
                <div className='px-2 py-2 border-2' key={product.id}>
                    <img className='w-[200px] h-[200px]' src={product.thumbnail} alt={product.title}/>
                    <p>{product.title}</p>
                </div>
            )):null
            }

        </div>

        <div>
            <button disabled= {disabled} onClick={()=>{setCount(count+1)}}>
                Load more ...
            </button>
            {disabled? <p>You have reached the end</p>:null}
        </div>
    </div>
  )
}

export default LoadMoreButton