import connectMongoDB from "@/libs/mongodb";
import Set from "@/models/setSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// get all sets
export async function GET(request: NextRequest) {
    await connectMongoDB();
    const sets = await Set.find();
    return NextResponse.json({ sets });
}

// create a set
export async function POST(request: NextRequest) {
    const { name } = await request.json();
    await connectMongoDB();
    await Set.create({ name });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}