import connectDB from "@/app/config/db";
import Category from "@/app/models/Category";

import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { mkdir } from "fs/promises";
import { parse } from "formidable";
import { IncomingForm } from "formidable";

export async function GET(request) {
    try {
        await connectDB();
        const categories = await Category.find();
        return new Response(JSON.stringify(categories));
    } catch (error) {
        
    }
}







export async function POST(req) {
    try {
        await connectDB();
        
        const formData = await req.formData();
        const title = formData.get('title');
        const image = formData.get('image');

        if (!title || !image) {
            return NextResponse.json({ error: 'Title and image are required' }, { status: 400 });
        }

        // Save image to public folder
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const imagePath = path.join(process.cwd(), 'public/uploads', image.name);
        await writeFile(imagePath, buffer);

        // Store in DB
        const newCategory = new Category({ title, image: `/uploads/${image.name}` });
        await newCategory.save();

        return NextResponse.json(newCategory, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error adding category' }, { status: 500 });
    }
}



export const config = {
    api: {
        bodyParser: false,
    },
};