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