import connectMongoDB from "@/libs/mongodb";
import Set from "@/models/setSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    await connectMongoDB();
    const set = await Set.findOne({ _id: id });
    return NextResponse.json({ set }, { status: 200 });
}

// update a set
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    const { name } = await request.json();
    await connectMongoDB();
    await Set.findByIdAndUpdate( id, { name });
}

// delete a set
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedItem = await Set.findByIdAndDelete(id);

    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}