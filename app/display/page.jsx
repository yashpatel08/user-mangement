'use client'
import React, { useEffect, useState } from 'react'

const display = () => {
    const [userdata, setUserData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users`, {
                    method: 'GET',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                })

                if (res.ok) {
                    const userData = await res.json();
                    setUserData(userData.data);
                } else {
                    console.error('Failed to fetch user data:', res.statusText);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div> 
            <h2>User Data:</h2>
            {userdata.map((user, index) => (
                <div key={index}>
                    <ul className='m-4 border border-b-2 w-66'>
                        <li>ID: {user._id}</li>
                        <li>Name: {user.name}</li>
                        <li>Age: {user.age}</li>
                        <li>Email: {user.email}</li>
                        {/* Add more fields as needed */}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default display