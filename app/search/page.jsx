'use client'
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [email, setEmail] = useState('');
    const [userdata, setUserData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${email}`)

            if (res.ok) {
                const userData = await res.json();

                setUserData(userData);
                console.log('data', userData)

            } else {
                console.error('Failed to fetch user data:', res.statusText);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }


    return (
        <div className="flex flex-col  items-center h-screen mt-0">

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 flex flex-col">
                <input className="m-4 p-1 border border-1" name="email" type="email" placeholder="email" onChange={handleChange} />
                <button type="submit" className="m-4 p-1 border-2 bg-blue-500 w-30">Search User</button>
            </form>

            {userdata ? (
                <div className='flex flex-col'>
                    <ul className='m-4 border border-b-2'>
                        <li>ID: {userdata.data._id}</li>
                        <li>Email: {userdata.data.email}</li>
                        <li>Name: {userdata.data.name}</li>
                        <li>Age: {userdata.data.age}</li>
                    </ul>
                </div>
            ) : (
                <p>...</p>
            )}
        </div>
    )
}

export default Search