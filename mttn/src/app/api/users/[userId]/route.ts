import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { userId: string };
}

//tested
// get a single user
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;
    await connectMongoDB();
    const user = await User.findOne({ _id: userId });
    return NextResponse.json({ user }, { status: 200 });
}

// tested
// update a user
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;
    const { username, email, password, profilePicture} = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(userId, { username, email, password, profilePicture });
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
