import connectMongoDB from "@/libs/mongodb";
import Card from "@/models/cardSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { cardId: string }
}

// tested
// get a single card
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { cardId } = await params;
    await connectMongoDB();
    const card = await Card.findOne({ _id: cardId });
    return NextResponse.json({ card }, { status: 200 });
}

// tested
// update a card
export async function PUT(request: NextRequest, { params }: RouteParams) {
    // Handle PUT requests
    const { cardId } = await params;
    const { term, definition } = await request.json();
    await connectMongoDB();
    await Card.findByIdAndUpdate( cardId, { term, definition, image });
    return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

// tested
// delete a card
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    // Handle DELETE requests
    const { cardId } = await params;

    if (!cardId) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedItem = await Card.findByIdAndDelete(cardId);

    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}