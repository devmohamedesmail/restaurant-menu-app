import connectDB from "@/app/config/db";
import Meal from "@/app/models/Meal";

export async function GET(request) {
     try {
          await connectDB();
          const meals = await Meal.find();
          return new Response(JSON.stringify(meals));
     } catch (error) {
          
     }
    
}





export async function POST(request) {

     await connectDB();
     const formData = await request.formData();
     const title = formData.get('title');
     const description = formData.get('description');
     const price = formData.get('price');
     const image = formData.get('image');
 
     const uploadDir = join(process.cwd(), "public/uploads");
     if (!existsSync(uploadDir)) {
         mkdirSync(uploadDir, { recursive: true });
     }
 
     const fileName = `${Date.now()}-${image.name}`;
     const filePath = join(uploadDir, fileName);
 
     // Save file to the public folder
     const buffer = Buffer.from(await image.arrayBuffer());
     await writeFile(filePath, buffer);
 
     // const category = new Category();
     // category.title = title;
     const category = new Category({
         title,
         image: `/uploads/${fileName}`, // Store the relative path
     });
     await category.save();
     return NextResponse.json({ formData, title, image });
 }