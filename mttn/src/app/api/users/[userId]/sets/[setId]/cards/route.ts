import connectMongoDB from "@/libs/mongodb";
import Card from "@/models/cardSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    await connectMongoDB();
    const cards = await Card.find();
    return NextResponse.json({ cards });
}

export async function POST(request: NextRequest) {
    const { term, definition } = await request.json();
    await connectMongoDB();
    await Card.create({ term, definition });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}


