import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { id: string };
}

// get a single user
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
}

// update a user
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    const { username, email, password, profilePicture} = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, { username, email, password, profilePicture });
    return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

// delete a user
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ message: "ID is requried" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedItem = await User.findByIdAndDelete(id);

    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}
