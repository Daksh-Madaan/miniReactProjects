import React from 'react'
import Counter from './components/Counter'
import Bgchanger from './components/Bgchanger'
import Passgen from './components/Passgen'
import Memo from './components/Memo'


const App = () => {
  
  return (
    <div className='max-w-[95%] w-250 m-auto'>
      <h1 className='text-3xl text-center'>miniReactProjects by <a target="_blank" href='https://www.github.com/Daksh-Madaan'
       className='underline text-cyan-500 hover:text-cyan-700'>Daksh Madaan</a></h1>
      <Counter />
      <Bgchanger />
      <Passgen />
      <Memo />
    </div>
  )
}

export default App
