import connectMongoDB from "@/libs/mongodb";
import Set from "@/models/setSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // Handle GET requessts
}

export async function POST(request: NextRequest) {
    const { name } = await request.json();
    await connectMongoDB();
    await Set.create({ name });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}

export async function PUT(request: NextRequest) {
    // Handle PUT requests
}

export async function DELETE(request: NextRequest) {
    // Handle DELETE requests
}