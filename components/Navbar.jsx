'use client'
import React, { useState } from 'react';
import Link from "next/link";
import toogle from '../public/bars-solid.svg';
import Image from 'next/image';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='mb-10'>
      {/* Toggle button for small devices */}
      <button
        className="absolute top-0 left-0 block sm:hidden bg-blue-400 text-white px-4 py-2 rounded-md m-2 z-20"
        onClick={() => setShowLinks(!showLinks)}
      >
        {showLinks ? <p>X</p> : <Image src={toogle} width={20}/>}
      </button>
 

      {/* Navbar with links */}
      <nav className={`fixed top-0  left-0 right-0 bg-navbar h-16 flex items-center justify-center transition-all duration-300 z-10  ${showLinks ? 'h-auto' : 'h-20'} ${showLinks ? 'backdrop-blur-sm' : ''} `}>
        <ul className={`flex gap-4 flex-col sm:flex-row ${showLinks ? 'flex' : 'hidden'} sm:flex`}>

          <li className="list-none m-2 text-white hover:text-gray">
            <Link href='/create'>
              <p className="text-white">Create User</p>
            </Link>
          </li>
          <li className="list-none m-2">
            <Link href='/update'>
              <p>Update User</p>
            </Link>
          </li>
          <li className="list-none m-2">
            <Link href='/delete'>
              <p>Delete User</p>
            </Link>
          </li>
          <li className="list-none m-2">
            <Link href='/search'>
              <p>Search User</p>
            </Link>
          </li>
          <li className="list-none m-2">
            <Link href='/display'>
              <p>Display all User</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
