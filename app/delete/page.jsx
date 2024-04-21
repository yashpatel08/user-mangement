'use client'
import React, { useState } from 'react'

const Delete = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${email}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (res.ok) {

                console.log('data deleted', email);

            } else {
                console.error('Failed to fetch delete data:');
            }

            alert('User deleted');

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }



    
    return (
        <div className="bg-gray-100 flex flex-col  items-center h-screen pt-12">

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 flex flex-col">
                <input className="m-4 p-1 border border-1" name="email" type="email" placeholder="email" onChange={handleChange} />
                <button type="submit" className="m-4 p-1 border-2 bg-blue-500 w-30">Delete User</button>
            </form>

        </div>
    )
}

export default Delete