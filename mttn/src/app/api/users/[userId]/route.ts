import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import Set from "@/models/setSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { userId: string };
}

// Get all sets for a user
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;
    await connectMongoDB();

    try {
        const user = await User.findById(userId).populate('sets');
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ sets: user.sets }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching sets", error}, { status: 500 });
    }
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

// Create a set
export async function POST(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;
    const { name } = await request.json();
    await connectMongoDB();

    try {
        const newSet = new Set({ name, cards: [] });
        await newSet.save();

        const user = await User.findById(userId);
        if (user) {
            user.sets.push(newSet._id);
            await user.save();
            return NextResponse.json({ message: "Set created successfully" }, { status: 201 });
        } else {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error creating set", error }, { status: 500 });
    }
}
