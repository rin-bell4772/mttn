import connectMongoDB from "@/libs/mongodb";
import Set from "@/models/setSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// implement this
interface RouteParams {
    params: { 
        setId: string,
        userId: string 
    }
}

// tested
// get a single set
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { setId } = await params;
    await connectMongoDB();
    const set = await Set.findOne({ _id: setId });
    return NextResponse.json({ set }, { status: 200 });
}

// tested
// update a set
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { setId } = await params;
    const { name } = await request.json();
    await connectMongoDB();
    await Set.findByIdAndUpdate( setId, { name });
    return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

// tested
// delete a set
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { setId } = await params;

    if (!setId) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedItem = await Set.findByIdAndDelete(setId);

    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}