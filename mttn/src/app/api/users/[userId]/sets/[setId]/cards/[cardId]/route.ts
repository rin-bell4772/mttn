import connectMongoDB from "@/libs/mongodb";
import Card from "@/models/cardSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    await connectMongoDB();
    const card = await Card.findOne({ _id: id });
    return NextResponse.json({ card }, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
    // Handle PUT requests
    const { id } = await params;
    const { term, definition } = await request.json();
    await connectMongoDB();
    await Card.findByIdAndUpdate( id, { term, definition });
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
    // Handle DELETE requests
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedItem = await Card.findByIdAndDelete(id);

    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}