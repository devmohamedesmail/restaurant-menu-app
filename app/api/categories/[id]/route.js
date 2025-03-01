import { NextResponse } from "next/server";
import Category from "@/app/models/Category";
import connectDB from "@/app/config/db";


export async function DELETE(request, { params }) {
    
   try {
   await connectDB()
    const id = params.id;
    
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully",id});
   } catch (error) {
    return NextResponse.json({ message: "Deleted unsuccessfully",id});
   }
}