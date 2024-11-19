import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


// needs to be tested
// get all users
export async function GET(request: NextRequest) {
    // Handle GET requessts
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}


// needs to be tested
// password needs to be hashed
// create a user
export async function POST(request: NextRequest) {
    // Handle POST requests
    const { username, email, password, profilePicture, sets } = await request.json();
    await connectMongoDB();
    await User.create({ username, email, password, profilePicture, sets });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}

// update a user
export async function PUT(request: NextRequest) {
    // Handle PUT requests
}

// delete a user
export async function DELETE(request: NextRequest) {
    // Handle DELETE requests
}
