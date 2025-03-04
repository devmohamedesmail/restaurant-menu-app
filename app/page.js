'use client';

import Categories from "./components/Categories/Categories";
import Meals from "./components/Meals/Meals";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";


export default function Home() {


  return (
    <div>

      <LanguageSwitcher />
      <Header />
      <Categories />
      <Banner />
      <Meals />
      <BottomNavbar />

    </div>
  );
}
