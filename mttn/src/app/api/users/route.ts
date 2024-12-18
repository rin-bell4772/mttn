import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";


// tested
// get all users
export async function GET(request: NextRequest) {
    // Handle GET requessts
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}


// tested
// password needs to be hashed
// create a user
export async function POST(request: NextRequest) {
    // Handle POST requests
    const { username, email, password, profilePicture } = await request.json();
    await connectMongoDB();
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = {
        username,
        email,
        password: hashedPassword,
        profilePicture,
    }
    try {
        await User.create(newUser);
        return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating a user" }, { status: 500 });
    }
}
