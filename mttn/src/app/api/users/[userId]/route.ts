import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import Set from "@/models/setSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";

interface RouteParams {
    params: { userId: string };
}

// Get a user by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;
    await connectMongoDB();

    try {
        const user = await User.findById(userId);
        if (user) {
            return NextResponse.json(user, { status: 200 });
        } else {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error fetching user", error }, { status: 500 });
    }
}

// tested
// Update a user
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;
    const { username, email, password, profilePicture } = await request.json();
    await connectMongoDB();

    const updateData: any = { username, email, profilePicture };

    // Hash the password if it is provided
    if (password) {
        const hashedPassword = await bcrypt.hash(password, 5);
        updateData.password = hashedPassword;
    }

    await User.findByIdAndUpdate(userId, updateData);
    return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

// tested
// delete a user
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;

    if (!userId) {
        return NextResponse.json({ message: "ID is requried" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedItem = await User.findByIdAndDelete(userId);

    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}
