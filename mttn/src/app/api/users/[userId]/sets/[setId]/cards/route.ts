import connectMongoDB from "@/libs/mongodb";
import Set from "@/models/setSchema";
import Card from "@/models/cardSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { userId: string, setId: string }
}

// Get all cards for a set
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { setId } = await params;
    await connectMongoDB();

    try {
        const set = await Set.findById(setId).populate('cards');
        if (!set) {
            return NextResponse.json({ message: "Set not found" }, { status: 404 });
        }

        return NextResponse.json({ cards: set.cards }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching cards", error: error.message }, { status: 500 });
    }
}

// Create a card
export async function POST(request: NextRequest, { params }: RouteParams) {
    const { setId } = await params;
    const { term, definition, image } = await request.json();
    await connectMongoDB();

    try {
        const newCard = new Card({ term, definition, image });
        await newCard.save();

        const set = await Set.findById(setId);
        if (set) {
            set.cards.push(newCard._id);
            await set.save();
            return NextResponse.json({ message: "Card created successfully" }, { status: 201 });
        } else {
            return NextResponse.json({ message: "Set not found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error creating card", error: error.message }, { status: 500 });
    }
}
