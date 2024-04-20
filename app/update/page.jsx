'use client'
import React, { useState } from 'react'
const update = () => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { name, age, email, password } = formData;


        if (!name || !email || !age) {
            return alert('Please fill all the input fields');
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    age,
                    password
                })
            })

            if (res.status === 400) {
                return alert('This email is not registered')
            } else if (res.status === 200) {
                setFormData({
                    name: '',
                    age: '',
                    email: '',
                    password: ''
                });
                alert('User successfully updated');
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div >
            <div className="flex flex-col justify-center items-center h-screen mt-0">

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 flex flex-col">

                    <input className="m-4 p-1 border border-1" name="name" type="text" placeholder="Name" onChange={handleChange}/>
                    <input className="m-4 p-1 border border-1" name="age" type="number" placeholder="age" onChange={handleChange} />
                    <input className="m-4 p-1 border border-1" name="email" type="email" placeholder="email" onChange={handleChange} />
                    <input className="m-4 p-1 border border-1" name="password" type="password" placeholder="password" onChange={handleChange} />
                    <button type="submit" className="m-4 p-1 border-2 bg-blue-500 w-30">Update User</button>

                </form>

            </div>
        </div>
    )
}

export default update