import connectMongoDB from "@/libs/mongodb";
import Set from "@/models/setSchema";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { userId: string, setId: string }
}

// Get a single set
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { setId } = await params;
    await connectMongoDB();
    const set = await Set.findOne({ _id: setId });
    return NextResponse.json({ set }, { status: 200 });
}

// Update a set
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { setId } = await params;
    const { name } = await request.json();
    await connectMongoDB();

    try {
        const updatedSet = await Set.findByIdAndUpdate(setId, { name }, { new: true });
        if (!updatedSet) {
            return NextResponse.json({ message: "Set not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Set updated successfully", set: updatedSet }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error updating set", error: error.message }, { status: 500 });
    }
}

// Delete a set
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { userId, setId } = await params;
    await connectMongoDB();

    try {
        const deletedSet = await Set.findByIdAndDelete(setId);
        if (!deletedSet) {
            return NextResponse.json({ message: "Set not found" }, { status: 404 });
        }

        await User.findByIdAndUpdate(userId, { $pull: { sets: setId } });

        return NextResponse.json({ message: "Set deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting set", error: error.message }, { status: 500 });
    }
}