import {useState} from 'react'

const Bgchanger = () => {
    const colors = [
        {name:"Crimson",id:1,style:"crimson"},
        {name:"Cadetblue",id:2,style:"cadetblue"},
        {name:"Light Sea Green",id:3,style:"lightseagreen"}
    ]
    const [bg,setBg] = useState('black')
    return (
    <div className='h-100 p-2 border-2 rounded-2xl border-dashed border-gray-50 m-3' style={{background: bg}}>
      <h1 className='italic text-3xl text-center text-white'>Bgchanger</h1>
      <div className='flex flex-wrap gap-2 items-center justify-center mt-3'>
        {colors.map((color) => {
            return <button key={color.id} className='text-amber-500 border border-amber-500 rounded-md bg-amber-200 p-2 w-55' onClick={() => setBg(color.style)}>{color.name}</button>
        })}
      </div>
    </div>
  )
}

export default Bgchanger
