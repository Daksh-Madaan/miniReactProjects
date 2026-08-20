import React,{useState,useMemo} from 'react'

const initialItems = new Array(29_999_999).fill(0).map((_, i) => ({
    id: i,
    isSelected: i === 29_999_998,
}));
const Memo = () => {
  
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  //const selectedItem = items.find((item) => item.isSelected);
  
  const selectedItem = useMemo(()=>{
      return items.find((item) => item.isSelected)

    },[items])
  
  return (
    <div className="text-4xl p-2 flex flex-col justify-center gap-2 items-center border-2 rounded-2xl border-dashed border-gray-400 m-3">
      <h1 className='text-3xl italic'>useMemo</h1>

      <h1>Count: {count}</h1>
      <h2>Selected Item: {selectedItem?.id}</h2>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4F46E5",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>Increment</button>

    </div>
  )
}

export default Memo


