import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import User from "@/model/User";

export const GET = async (_,res) => {
    try {
        await connectDB()

        const { email } = res.params;
        console.log('Email:', email);
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        
        return NextResponse.json({ data: user }, { status: 200 });
    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
};

export const DELETE = async(_,res)=> {
    try {
        await connectDB()
        const { email } = res.params;

        console.log('Email:', email);
        
        const deletedUser = await User.findOneAndDelete({ email });

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
