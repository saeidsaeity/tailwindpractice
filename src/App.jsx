import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CiMenuBurger } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import homepageimage from "./assets/homepageimage.jpg";
import homepageimage2 from "./assets/homepageimage2.jpg";

import "./App.css";
import UkFlag from "./assets/Ukflag.svg";
import down from "./assets/down.svg";
import { MdAccountCircle } from "react-icons/md";
import SideBarDisplay from "./componenets/SideBarDisplay";
import logo from "./assets/logo.svg";
import Header from "./componenets/Header";
function App() {
  const [showRibbon, setShowRibbon] = useState(true);

  return (
    <div>
      <Header />
      <img
        className="pb-8 h-4/6 sm:h-1/3 md:h-1/3 lg:h-1/3 xl:h-4/5 2xl:h-4/5 2xl:pt-0 w-full object-cover   pt-10   "
        src={homepageimage}
      />

      <div className="relative h-90vh sm:h-1/3 md:h-1/3 lg:h-2/3 xl:h-2/3 2xl:h-full  w-full ">
        <img
          className="pb-8 h-90vh sm:h-2/3  2xl:h-full 2xl:object-fill w-full object-cover 2xl:pt-10"
          src={homepageimage2}
        />
        <div className=" w-full absolute flex flex-col justify-center inset-0 ">
          <div className="basis-4/6"></div>
          <div className="basis-2/6 ">
            <p className="text-white text-medium font-serif georgia font-bold justify-center ml-4">
              WHAT TO WEAR THIS WINTER
            </p>
            <p className="text-white ml-4 mr-4 text-base font-serif">
              Heavy-duty outerwear, sumptuous knitwear and more cold-weather
              essentials from the world's best brands
            </p>
            <button className="bg-white ml-4 w-11/12 mr-4 h-12 rounded text-sm">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
