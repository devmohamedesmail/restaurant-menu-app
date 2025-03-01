
import Categories from "./components/Categories/Categories";
import Meals from "./components/Meals/Meals";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import connectDB from "./config/db";


export default function Home() {

  return (
   <>
  
   <Categories />
   <Meals />
   <BottomNavbar />

   </>
  );
}
