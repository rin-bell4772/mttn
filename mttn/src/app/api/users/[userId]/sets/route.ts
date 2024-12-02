import connectMongoDB from "@/libs/mongodb";
import Set from "@/models/setSchema";
import { ISet } from "@/models/setSchema";
import Card from "@/models/cardSchema";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { userId: string }
}

// implement this

// Get all sets for a user
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;
    await connectMongoDB();
    try {
        const user = await User.findById(userId).populate('sets');
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ sets: user.sets }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching sets", error}, { status: 500 });
    }
}

// Create a set
export async function POST(request: NextRequest, { params }: RouteParams) {
    const { userId } = await params;
    const { name } = await request.json();
    await connectMongoDB();

    try {
        const newSet = new Set({ name, cards: [] });
        await newSet.save();

        const user = await User.findById(userId);
        if (user) {
            user.sets.push(newSet._id as unknown as ISet);
            await user.save();
            return NextResponse.json({ message: "Set created successfully" }, { status: 201 });
        } else {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error creating set", error }, { status: 500 });
    }
}