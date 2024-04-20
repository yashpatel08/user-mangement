import User from "@/model/User"; 
import connectDB from "@/config/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export const POST = async (req) => {
    let { name, age, email, password } = await req.body();
    if (!name || !age || !email || !password) {
        return new NextResponse({ error: 'Please provide all requires fields' }, { status: 400 });

    }

    await connectDB()

    const exisitingEmail = await User.findOne({ email })
    if (exisitingEmail) {
        return new NextResponse({ error: 'User with given email already exist' }, {
            status: 400
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ name, age, email, password: hashedPassword })
    console.log(newUser);
    try {
        await newUser.save()
 
        const userLocalStorage = { name, age, email };
        localStorage.setItem('user', JSON.stringify(userLocalStorage));

        return new NextResponse('User successfully registered !', { status: 201 });
    } catch (error) {
        return new NextResponse({ error: 'User not registered' }, { status: 500 })
    }

}


export const PUT = async (req) => {
    try {
        let { name, age, email, password } = await req.json();

        if (!name || !age || !email) {
            return new NextResponse({ error: 'Please provide all requires fields' }, { status: 400 });
        }

        await connectDB()

        const exisitingUser = await User.findOne({ email })
        if (!exisitingUser) {
            return new NextResponse({ error: 'User with given email not exist' }, {
                status: 400
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        exisitingUser.name = name;
        exisitingUser.age = age;
        exisitingUser.password = hashedPassword;
        await exisitingUser.save();

        if (typeof localStorage !== 'undefined') {
            const userLocalStorage = { name, age, email };
            localStorage.setItem('user', JSON.stringify(userLocalStorage));
        }

        return new NextResponse('User successfully updated!', { status: 200 });
    } catch (error) {
        console.error('Error updating user:', error);
        return new NextResponse({ error: 'Internal server error' }, { status: 500 });
    }
} 

export const GET = async () => {
    try {
        await connectDB()

        const data = await User.find();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
};
 
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    return await POST(req, res);
}