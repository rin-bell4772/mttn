import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


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
    const { username, email, password, profilePicture, sets } = await request.json();
    await connectMongoDB();
    await User.create({ username, email, password, profilePicture, sets });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}
