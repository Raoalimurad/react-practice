import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-black text-white p-3 items-center'>
        <div>
            <h2 className='ml-3 text-3xl font-bold'>Rao</h2>
        </div>
        <div>
            <ul className='flex gap-4 text-xl mr-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header