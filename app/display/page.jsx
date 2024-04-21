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
            {userdata.length === 0 ? (
                <div className='flex justify-center  text-red'>
                    <p className='pt-10'>No user data available. Please create a user.</p>
                </div>
            ) : (
                userdata.map((user, index) => (
                    <div key={index} className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                            <ul className='m-4 border border-b-2'>
                                <li>ID: {user._id}</li>
                                <li>Name: {user.name}</li>
                                <li>Age: {user.age}</li>
                                <li>Email: {user.email}</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default display