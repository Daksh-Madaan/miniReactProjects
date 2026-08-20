import {useState,useEffect,useCallback} from 'react'

const Space = () => {
    const [count, setCount] = useState(0);
    const handleSpace = useCallback((event)=> {if(event.key === " ") setCount(prev => prev +1)},[]);

    useEffect(()=> {
        window.addEventListener("keydown", handleSpace);
        console.log("addEventListener Triggered");
        return () => {
            window.removeEventListener("keydown", handleSpace);
            console.log("removeEventListenser Triggered");
        }
    },[handleSpace])
    return (
    <div>
      <h1>Spaces: {count}</h1>
    </div>
  )
}

export default Space
