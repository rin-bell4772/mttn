import connectMongoDB from "@/libs/mongodb";
import Card from "@/models/cardSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// implement this
interface RouteParams {
    params: { 
        userId: string, 
        setId: string 
    }
}

// tested
// get all cards
export async function GET(request: NextRequest) {
    await connectMongoDB();
    const cards = await Card.find();
    return NextResponse.json({ cards });
}

// tested
// create a card
export async function POST(request: NextRequest) {
    const { term, definition, image } = await request.json();
    await connectMongoDB();
    await Card.create({ term, definition, image });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}


