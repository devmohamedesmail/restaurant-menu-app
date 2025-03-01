
import Categories from "./components/Categories/Categories";
import Meals from "./components/Meals/Meals";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import connectDB from "./config/db";
import Banner from "./components/Banner/Banner";


export default function Home() {

  return (
   <div>
  
   <Categories />
   <Banner />
   <Meals />
   <BottomNavbar />

   </div>
  );
}
