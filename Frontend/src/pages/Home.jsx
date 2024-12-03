import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  w-full flex justify-between flex-col'>
      <img className='w-16 ml-8' src="https://www.texasrealsanta.com/wp-content/uploads/2024/10/uber-logo-white.png" alt="uber logo" />
        <div className='bg-white pb-7 py-4 px-4'>
           <h2 className='text-2xl font-bold'>Get Started with Uber</h2>

           <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4 '>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
