import {useState,useEffect} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
     
    useEffect(()=> {
      console.log(`Count Changed to ${count}`);
      return ()=>{console.log("Clean Up")}
    })

    const plus = () => {
        /*
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        - Batch Rendering, Will not add 3 but only 1 as rest
        of the two will be seen as repeating and ignored
        */
       setCount(prev => prev + 1)
    }
    const minus = () => {
        //setCount(count - 1);
        if(count != 0) setCount(prev => prev - 1);
    }
    return (
    <div className="text-4xl p-2 flex flex-col gap-2 items-center justify-center border-2 rounded-2xl border-dashed border-gray-400 m-3">
      <h1 className='italic'>Counter</h1>
      <h3>{count}</h3>
      <div className='flex flex-wrap gap-2 justify-center'>
        <button className='bg-amber-200 text-amber-500 border border-amber-500 rounded-md p-2 w-45' onClick={plus}>Plus</button>
        <button className='bg-amber-200 text-amber-500 border border-amber-500 rounded-md p-2 w-45' onClick={minus}>Minus</button>
      </div>
    </div>
  )
}

export default Counter