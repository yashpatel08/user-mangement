'use client'

import { NextResponse } from "next/server";

const handleSubmit = async (e) => {
  e.preventDefault()

  const name = e.target[0].value;
  const age = e.target[1].value;
  const email = e.target[2].value;
  const password = e.target[3].value;
  const confirmPassword = e.target[4].value;

  if (!name || !email || !age || !password || !confirmPassword) {
    return alert('Please fill all the input fields');
  } else if (password != confirmPassword) {
    return alert('Passwords do not match');
  }

  try {
    const res = await fetch('/api/users', {
      method: 'POST',
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
      return alert('This email is already registered')
    } else if (res.status === 201) {
      router.push('/')
      return new NextResponse('User successfully registered')
    }
  } catch (error) {
    console.log(error);
  }


}

const create = () => {


  return (
    <div>

      <div className="flex flex-col justify-center items-center h-screen mt-0">

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 flex flex-col">

          <input className="m-3 p-1 border border-1" name="name" type="text" placeholder="Name" />
          <input className="m-3 p-1 border border-1" name="age" type="number" placeholder="age" />
          <input className="m-3 p-1 border border-1" name="email" type="email" placeholder="email" />
          <input className="m-3 p-1 border border-1" name="password" type="password" placeholder="password" />
          <input className="m-3 p-1 border border-1" name="confirmpassword" type="text" placeholder="confirm password" />
          <button type="submit" className="m-4 p-1 border-2 bg-blue-500 w-30">Add User</button>
        </form>
      </div>
    </div>
  )
}


export default create;