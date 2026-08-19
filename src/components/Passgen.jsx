import {useState, useCallback, useEffect, useRef} from 'react'

const Passgen = () => {
  const [len,setLen] = useState(16)
  const [num,setNum] = useState(true);
  const [schar,setSchar] = useState(true);

  const [pass,setPass] = useState('This is not a Password') 

  const passgenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (num) str += "1234567890";
      if (schar) str += "!@#$%&*";
      for(let i = 0;i<len;i++){
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }
      setPass(pass);
  },[len,num,schar,setPass])

  useEffect(() => passgenerator(), [len,num,schar,setPass,passgenerator])
  
  const passRef = useRef(null);
  const copy = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  },[pass])
  
  return (
    <div className="text-4xl p-2 flex flex-col justify-center gap-2 items-center border-2 rounded-2xl border-dashed border-gray-400 m-3">
        <h1 className='text-3xl text-center italic'>Passgen</h1>
        <div className='flex flex-col max-w-full justify-center gap-2 items-center'>
          <input className='bg-gray-200 rounded-lg p-1 w-full text-md' value={pass} readOnly ref={passRef}/>
        <button className='bg-[crimson]/70 rounded-lg p-2 text-white' onClick={copy}>Copy</button>
        </div>
        <form className='max-w-full flex gap-5 flex-wrap item-center justify-center'>
          <input type='number' min={8} max={70} value={len} onChange={(event) => setLen(event.target.value)} className='bg-gray-200 p-2 text-sm rounded-sm outline-0 w-max' />
          <div className='flex items-center gap-1.5'>
            <label htmlFor='num' className='text-sm'>Numbers</label>
            <input type="checkbox" checked={num} onChange={() => setNum(prev => !prev)} id='num'></input>
          </div>
          <div className='flex items-center gap-1.5'>
            <label htmlFor='schar' className='text-sm'>Special Characters</label>
            <input type="checkbox" id='schar' checked={schar} onChange={() => setSchar(prev => !prev)}></input>
          </div>
        </form>
    </div>
  )
}

export default Passgen
