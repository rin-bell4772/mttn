import connectMongoDB from "@/libs/mongodb";
import Set from "@/models/setSchema";
import Card from "@/models/cardSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { userId: string, setId: string }
}

// implement this
interface RouteParams {
    params: { userId: string }
};

// tested
// get all sets
// export async function GET(request: NextRequest) {
//     await connectMongoDB();
//     const sets = await Set.find();
//     return NextResponse.json({ sets });
// }

// tested
// create a set
// export async function POST(request: NextRequest) {
//     const { name } = await request.json();
//     await connectMongoDB();
//     await Set.create({ name });
//     return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
// }

// Create a card
// export async function POST(request: NextRequest, { params }: RouteParams) {
//     const { setId } = params;
//     const { term, definition, image } = await request.json();
//     await connectMongoDB();

//     try {
//         const newCard = new Card({ term, definition, image });
//         await newCard.save();

//         const set = await Set.findById(setId);
//         if (set) {
//             set.cards.push(newCard._id);
//             await set.save();
//             return NextResponse.json({ message: "Card created successfully" }, { status: 201 });
//         } else {
//             return NextResponse.json({ message: "Set not found" }, { status: 404 });
//         }
//     } catch (error) {
//         return NextResponse.json({ message: "Error creating card", error: error.message }, { status: 500 });
//     }
// }