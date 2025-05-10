import React from 'react'

import Navbar from '../components/navbar'
import Content from '../components/content'
function Home() {


  return (
    <div className="bg-zinc-200 text-zinc-900 text-2xl ">
      <Navbar/>
       <div className='w-screen h-screen flex items-center justify-center '>
         <Content/>
       </div>
    </div>
       
  )
}

export default Home
