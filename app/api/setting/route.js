import connectDB from "@/app/config/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        connectDB();
        return NextResponse.json({ message: "Setting fetched successfully" });
    } catch (error) {
        
    }
}