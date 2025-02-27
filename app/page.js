import Image from "next/image";
import Link from "next/link";
import Categories from "./components/Categories/Categories";
import Meals from "./components/Meals/Meals";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import connectDB from "./config/db";

export default function Home() {
  connectDB()
  return (
   <>
  
   <Categories />
   <Meals />
   <BottomNavbar />

   </>
  );
}
